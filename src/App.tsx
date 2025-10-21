import { useEffect, useState } from "react"
import { useGameLogic } from "./hooks/useGameLogic"
import useDarkMode from "./hooks/useDarkMode"
import Header from "./components/Header"
import Board from "./components/Board"
import GameOverModal from "./components/GameOverModal"
import Score from "./components/Score"
import Footer from "./components/Footer"
import "./App.css"
import WinModal from "./components/WinModal"
import { useScroll } from "framer-motion"

function App() {
    const {
        board,
        score,
        resetGame,
        slideLeft,
        slideRight,
        slideUp,
        slideDown,
        bestScore,
        gameIsOver,
        canUndo,
        undo,
        hasWon
    } = useGameLogic()

    const handleUserKeyPress = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            slideLeft()
        }
        if (e.key === "ArrowRight") {
            slideRight()
        }
        if (e.key === "ArrowUp") {
            slideUp()
        }
        if (e.key === "ArrowDown") {
            slideDown()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress)
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress)
        }
    }, [])

    const { isDark, toggleDarkMode } = useDarkMode()

    const [showWinModal, setShowWinModal] = useState(true)

    const onResetGame = () => {
        resetGame()
        setShowWinModal(true)
    }

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-start pt-[50px] ${
                isDark ? "bg-slate-900 text-amber-100" : "bg-amber-50 text-slate-800"
            }`}
        >
            <Header resetGameFunction={resetGame} toggleDarkMode={toggleDarkMode} />
            <Score score={score} bestScore={bestScore} />
            <Board
                board={board}
                onMoveLeft={slideLeft}
                onMoveRight={slideRight}
                onMoveUp={slideUp}
                onMoveDown={slideDown}
            />
            <Footer onUndo={undo} disabled={!canUndo()} />
            <GameOverModal show={gameIsOver} score={score} bestScore={bestScore} onRestart={onResetGame} />
            <WinModal isOpen={showWinModal && hasWon} onClose={() => setShowWinModal(false)} onNewGame={onResetGame} />
        </div>
    )
}

export default App
