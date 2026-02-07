import { motion } from 'framer-motion';

export default function FloatingHearts({ count = 6 }) {
    const hearts = Array.from({ length: count });

    return (
        <>
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-400/40 pointer-events-none select-none text-4xl md:text-6xl"
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: "100vh",
                        scale: 0.2 + Math.random() * 0.6,
                        opacity: 0.1
                    }}
                    animate={{
                        y: "-20vh",
                        opacity: [0.1, 0.7, 0.1],
                        rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                        duration: 12 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "easeOut"
                    }}
                    style={{ left: `${Math.random() * 90}%` }}
                >
                    ♥
                </motion.div>
            ))}
        </>
    );
}
