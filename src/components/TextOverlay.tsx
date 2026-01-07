import { useScroll, useTransform, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TextOverlayProps {
    containerRef: React.RefObject<HTMLElement>;
}

export const TextOverlay = ({ containerRef }: TextOverlayProps) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Opacity transforms for each section
    // 0-20%: Intro
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // 25-50%: Planes rise
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.5], [50, -50]);

    // 55-80%: Routes
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

    // 85-100%: CTA
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 1], [50, 0]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col justify-center px-6 md:px-20">

            {/* SECTION 1: INTRO (Centered) */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center text-center"
            >
                <div>
                    {/* Brand name removed */}
                </div>
            </motion.div>

            {/* SECTION 2: LEFT ALIGNED */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-6 md:px-24"
            >
                <div className="max-w-xl text-left">
                    <h2 className="text-3xl font-medium text-white md:text-5xl">
                        Planes rise. <br />
                        <span className="text-[#0077B6]">Passports turn.</span>
                    </h2>
                </div>
            </motion.div>

            {/* SECTION 3: RIGHT ALIGNED */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-0 top-1/2 w-full -translate-y-1/2 px-6 md:px-24"
            >
                <div className="ml-auto max-w-xl text-right">
                    <h2 className="text-3xl font-medium text-white md:text-5xl">
                        Hand-picked routes. <br />
                        <span className="text-[#FF6B61]">Serene departures.</span>
                    </h2>
                </div>
            </motion.div>

            {/* SECTION 4: CTA (Centered) */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-0 flex items-center justify-center text-center"
            >
                <div className="pointer-events-auto">
                    <h2 className="mb-8 text-4xl font-semibold text-white md:text-6xl">
                        Whisk you away.
                    </h2>
                    <Link to="/destinations" className="group relative overflow-hidden rounded-full bg-[#0077B6] px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-[#0096e6] hover:shadow-[0_0_40px_-10px_rgba(0,119,182,0.5)] inline-block">
                        <span className="relative z-10">Explore Destination</span>
                    </Link>
                </div>
            </motion.div>

        </div>
    );
};
