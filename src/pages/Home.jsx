import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeartBeat from '../components/HeartBeat';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
                className="text-5xl md:text-7xl font-handwriting text-rose-600 text-center mb-6"
            >
                Happy Propose Day, <br />My Dear Vazhithunaiyee 💕
            </motion.h1>

            <HeartBeat />

            <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/memory")}
                className="mt-16 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl md:text-2xl rounded-full shadow-2xl shadow-rose-400/40"
            >
                Shall we be together to join our journey? →
            </motion.button>
        </div>
    );
}
