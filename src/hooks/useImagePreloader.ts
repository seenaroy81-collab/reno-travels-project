import { useState, useEffect } from 'react';

export const useImagePreloader = (frameCount: number, basePath: string = '/frames') => {
    const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const loadedImages: HTMLImageElement[] = new Array(frameCount).fill(null);
        let loadedCount = 0;

        const loadImages = () => {
            // Pre-fill array with empty images relative to frameCount to maintain order
            // Note: We used to push to loadedImages, but for parallel loading we need to insert at correct index
            // However, for ScrollSequence we need sequential access or check if exists.
            // Actually, simplest parallel approach:

            const promises = Array.from({ length: frameCount }).map((_, i) => {
                const img = new Image();
                const fileName = `frame_${i.toString().padStart(3, '0')}.jpg`;
                img.src = `${basePath}/${fileName}`;

                return new Promise<void>((resolve) => {
                    img.onload = () => {
                        if (!mounted) return;
                        loadedImages[i] = img;
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));

                        // If first image is loaded, we can start showing something
                        if (i === 0) {
                            setLoading(false);
                        }
                        // Also update images state periodically or on every load? 
                        // React batching might handle it, but updating state 40 times in 100ms might be much.
                        // But we need the images in the state to be able to render them.
                        // Let's just update setImages copy.
                        setImages([...loadedImages]);
                        resolve();
                    };
                    img.onerror = () => {
                        if (!mounted) return;
                        console.error(`Failed to load frame ${i}`);
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                });
            });
        };

        loadImages();

        return () => {
            mounted = false;
        };
    }, [frameCount, basePath]);

    return { images, progress, loading };
};
