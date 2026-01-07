import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface ScrollSequenceProps {
    frameCount: number;
    containerRef: React.RefObject<HTMLElement>;
    basePath?: string;
}

export const ScrollSequence = ({ frameCount, containerRef, basePath = '/frames' }: ScrollSequenceProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const { images, loading, progress } = useImagePreloader(frameCount, basePath);
    const prefersReducedMotion = useReducedMotion();

    // Create a motion value that maps scroll 0-1 to frame index 0-(frameCount-1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Update current frame index on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        setCurrentIndex(Math.round(latest));
    });

    // Render to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || loading || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[currentIndex];
        if (!img) return;

        // Handle high DPI
        const dpr = window.devicePixelRatio || 1;

        // Calculate aspect ratio to cover or contain
        // "Single sticky, full-screen canvas centered on the page."
        // "Canvas background MUST match image background exactly... or exact sampled value from assets."
        const render = () => {
            const resizeCanvas = () => {
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                ctx.scale(dpr, dpr);

                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                // Draw image - Cover or Contain?
                // "Canvas should contain on mobile so edges never crop oddly."
                // Let's use 'contain' logic to be safe for this specific cinematic feel, ensuring the whole frame is seen.
                // Or 'cover' for desktop immersion? The prompt says "edges are invisible" due to bg match, implying we can use 'contain' and fill the rest with color.

                const imgRatio = img.width / img.height;
                const canvasRatio = window.innerWidth / window.innerHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    // Canvas is wider than image
                    drawHeight = window.innerHeight;
                    drawWidth = drawHeight * imgRatio;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    // Canvas is taller than image
                    drawWidth = window.innerWidth;
                    drawHeight = drawWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                }

                // Fill bg
                ctx.fillStyle = '#1F2226';
                ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            };

            // Initial draw
            resizeCanvas();

            // We might not need to attach resize listener here if we rely on parent re-renders,
            // but for a canvas, it's safer to listen.
            // For now, let's assume the effect re-runs if window size changes? No, it doesn't.
            // But doing a full resize listener in this effect might be heavy.
            // Let's just draw the current frame.
        };

        render();

        // Re-render on resize
        const handleResize = () => {
            requestAnimationFrame(render);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [currentIndex, loading, images, prefersReducedMotion]); // Add prefersReducedMotion to dependencies

    // If loading, show spinner
    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2226] text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0077B6] border-t-transparent"></div>
                    <p className="font-mono text-sm tracking-widest text-[#FF6B61]">{progress}% READY</p>
                </div>
            </div>
        );
    }

    // Fallback for reduced motion
    if (prefersReducedMotion) {
        const firstImage = images[0];
        if (!firstImage) {
            return null; // Or a placeholder if no images are loaded yet
        }
        return (
            <div
                className="fixed inset-0 z-0 flex items-center justify-center bg-[#1F2226]"
                style={{
                    backgroundImage: `url(${firstImage.src})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 h-full w-full object-contain"
            style={{ backgroundColor: '#1F2226' }}
        />
    );
};
