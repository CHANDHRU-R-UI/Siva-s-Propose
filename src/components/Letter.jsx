import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen } from 'lucide-react';

const Letter = ({ content, sender }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer bg-white/60 backdrop-blur-md border border-rose-100 rounded-2xl p-6 md:p-12 shadow-xl relative"
            >
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <Mail size={80} className="text-rose-500" />
                            <p className="text-rose-600 font-medium">You have a letter...</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="max-w-md text-center"
                        >
                            <div className="mb-6 flex justify-center">
                                <MailOpen size={60} className="text-rose-500" />
                            </div>
                            <p className="text-gray-800 text-xl italic leading-relaxed mb-4">
                                "{content}"
                            </p>
                            <p className="text-rose-700 font-bold self-end font-handwriting text-2xl">
                                - {sender}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Letter;
