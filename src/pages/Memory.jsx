import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Letter from '../components/Letter';

export default function Memory() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-6xl font-handwriting text-rose-600 mb-8">My Dear Kaniz</h2>
                <Letter
                    content="I remember the first time we met, the way the world seemed to stand still. Every moment since then has been a beautiful dream come true. You've changed my life in ways I never thought possible."
                    sender="your heartly Siva 🌍❤️🩹"
                />
                <div className="mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/reasons')}
                        className="px-8 py-3 bg-white/40 hover:bg-white/60 text-rose-600 rounded-full border border-rose-200 backdrop-blur-sm transition-all font-semibold"
                    >
                        Read More →
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
