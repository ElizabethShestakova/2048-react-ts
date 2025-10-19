import { useEffect } from "react"
import { useGameLogic } from "./hooks/useGameLogic"
import useDarkMode from "./hooks/useDarkMode"
import Header from "./components/Header"
import Board from "./components/Board"
import GameOverModal from "./components/GameOverModal"
import Score from "./components/Score"
import "./App.css"

function App() {
    const { board, score, resetGame, slideLeft, slideRight, slideUp, slideDown, bestScore, gameIsOver } = useGameLogic()

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
            <GameOverModal show={gameIsOver} score={score} bestScore={bestScore} onRestart={resetGame} />
        </div>
    )
}

export default App
