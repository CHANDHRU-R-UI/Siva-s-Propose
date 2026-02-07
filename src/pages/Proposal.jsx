import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Proposal() {
    const navigate = useNavigate();
    const [answered, setAnswered] = useState(false);
    const [yes, setYes] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
            <div className="max-w-2xl text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-5xl md:text-7xl font-handwriting text-rose-600 mb-12"
                >
                    Will you make me the happiest person in the world...
                </motion.h1>

                {!answered ? (
                    <motion.div
                        className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <button
                            onClick={() => { setYes(true); setAnswered(true); }}
                            className="text-2xl md:text-3xl px-12 md:px-16 py-6 md:py-8 bg-green-500 hover:bg-green-600 text-white rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-300 w-full sm:w-auto"
                        >
                            YES! 💖
                        </button>

                        <button
                            onClick={() => alert("You cannot escape destiny 😏 Try again hehe")}
                            className="text-xl md:text-3xl px-10 md:px-16 py-5 md:py-8 bg-gray-400 hover:bg-gray-500 text-white rounded-3xl shadow-xl w-full sm:w-auto"
                        >
                            No...
                        </button>
                    </motion.div>
                ) : yes ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-bold text-rose-600 mt-16"
                    >
                        You SAID YES!!! 🥹💍✨
                    </motion.div>
                ) : null}

                {yes && (
                    <>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-3xl mt-12 font-handwriting text-rose-700"
                        >
                            I love you as Always Dii ❤️<br />
                            —By Urs[Siva]
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate('/final')}
                            className="mt-12 px-8 py-4 bg-rose-500 text-white rounded-full text-xl font-bold shadow-xl flex items-center gap-2 mx-auto"
                        >
                            One More Surprise... →
                        </motion.button>
                    </>
                )}
            </div>
        </div>
    );
}
