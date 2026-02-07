import { motion } from 'framer-motion';

export default function HeartBeat() {
  return (
    <motion.div
      className="text-8xl md:text-9xl text-rose-500 mt-4 mb-10"
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      ♥
    </motion.div>
  );
}
