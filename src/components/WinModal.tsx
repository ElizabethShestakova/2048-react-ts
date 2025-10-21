// components/WinModal.tsx
import { motion, AnimatePresence } from "framer-motion"

interface WinModalProps {
    isOpen: boolean
    onClose: () => void
    onNewGame: () => void
}

export default function WinModal({ isOpen, onClose, onNewGame }: WinModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-gradient-to-br from-amber-100 to-amber-200 dark:from-stone-700 dark:to-stone-800
                                   p-6 rounded-2xl shadow-2xl max-w-sm mx-auto text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <h2 className="text-3xl font-bold text-amber-700 dark:text-amber-300 mb-3">🎉 You Win!</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            You reached <span className="font-bold text-amber-600 dark:text-amber-400">2048</span>!
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-br from-slate-100 to-slate-200 
                                           shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
                                           active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]
                                           dark:from-stone-600 dark:to-stone-700 dark:text-amber-200"
                            >
                                Continue
                            </button>
                            <button
                                onClick={onNewGame}
                                className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-br from-amber-200 to-amber-300 
                                           shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
                                           active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]
                                           dark:from-amber-500 dark:to-amber-600 dark:text-white"
                            >
                                New Game
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
