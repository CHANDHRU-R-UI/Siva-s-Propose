import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Stars, Sparkles, HeartPulse, ShieldCheck, Sun } from 'lucide-react';

const reasons = [
    { icon: <Sparkles className="text-yellow-400" />, text: "The way your eyes light up when you're happy." },
    { icon: <HeartPulse className="text-rose-500" />, text: "How you make me feel safe and loved every single day." },
    { icon: <ShieldCheck className="text-blue-400" />, text: "Your unwavering support in everything I do." },
    { icon: <Stars className="text-purple-400" />, text: "The magic you bring into even the most ordinary moments." },
    { icon: <Sun className="text-orange-400" />, text: "How you're the sunshine that brightens my darkest days." }
];

export default function Reasons() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
            <div className="max-w-2xl w-full">
                <h2 className="text-4xl md:text-6xl font-handwriting text-rose-600 mb-12 text-center">Reasons Why I Love You</h2>
                <div className="grid gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/40 backdrop-blur-md border border-rose-100 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 shadow-lg"
                        >
                            <div className="p-2 md:p-3 bg-rose-50 rounded-full">{reason.icon}</div>
                            <p className="text-gray-800 text-base md:text-lg font-medium">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 md:mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/proposal')}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl"
                    >
                        I have one more thing to say...
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
