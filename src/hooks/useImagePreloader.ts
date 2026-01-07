import { useState, useEffect } from 'react';

export const useImagePreloader = (frameCount: number, basePath: string = '/frames') => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImages = async () => {
            for (let i = 0; i < frameCount; i++) {
                if (!mounted) return;

                const img = new Image();
                const fileName = `frame_${i.toString().padStart(3, '0')}.jpg`;
                img.src = `${basePath}/${fileName}`;

                await new Promise((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve(null);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        loadedCount++; // Count even as error to progress
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve(null);
                    };
                });

                loadedImages.push(img);
            }

            if (mounted) {
                setImages(loadedImages);
                setLoading(false);
            }
        };

        loadImages();

        return () => {
            mounted = false;
        };
    }, [frameCount]);

    return { images, progress, loading };
};
