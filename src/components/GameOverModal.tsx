import { motion, AnimatePresence } from "framer-motion"

interface GameOverModalProps {
    show: boolean
    score: number
    bestScore: number
    onRestart: () => void
}

export default function GameOverModal({ show, score, bestScore, onRestart }: GameOverModalProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 text-center rounded-2xl shadow-2xl p-6 w-80"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-red-500">Game Over 😢</h2>
                        <p className="text-lg mb-1">
                            Your score: <span className="font-semibold">{score}</span>
                        </p>
                        <p className="text-md mb-4 text-gray-600">
                            Best score: <span className="font-semibold">{bestScore}</span>
                        </p>
                        <button
                            onClick={onRestart}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                        >
                            Try again
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
