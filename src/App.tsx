import "./App.css"
import Header from "./components/Header"
import Board from "./components/Board"
import { useGameLogic } from "./hooks/useGameLogic"
import { useEffect } from "react"

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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <Header resetGameFunction={resetGame} />
            <Board board={board} score={score} bestScore={bestScore} gameIsOver={gameIsOver} />
        </div>
    )
}

export default App
