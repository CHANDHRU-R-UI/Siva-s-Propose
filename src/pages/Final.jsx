import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Final() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl w-full bg-white/40 backdrop-blur-md border border-rose-100 p-6 md:p-8 rounded-3xl shadow-2xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative rounded-2xl overflow-hidden mb-8 shadow-inner"
                >
                    <img
                        src="/special-moment.jpg"
                        alt="Our Special Moment"
                        className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                <h1 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-6 leading-relaxed">
                    I will always be with you chlow ❤️💍
                </h1>

                <p className="text-lg md:text-2xl text-gray-800 mb-4 font-medium leading-relaxed">
                    whatever happens eppothum unakaka
                    Naan irupen di chlow 🌍
                </p>

                <p className="text-2xl md:text-3xl font-handwriting text-rose-700 mb-6">
                    I love you As Always di my Wifeyyy  🌍
                </p>
                <p className="text-2xl md:text-3xl font-handwriting text-rose-700 mb-6">
                    I Expect Your Answer Dii 🥺
                </p>
                <p className="text-2xl md:text-3xl font-handwriting text-rose-700 mb-6">
                    Will You Marry Me Di 🥺
                </p>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <Heart size={40} className="text-rose-500 fill-rose-500" />
                </motion.div>
            </motion.div>
        </div>
    );
}
