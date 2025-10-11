import "./App.css"
import Header from "./components/Header"
import Board from "./components/Board"
import { useGameLogic } from "./hooks/useGameLogic"

function App() {
    const { board, score, resetGame } = useGameLogic()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <Header resetGameFunction={resetGame} />
            <Board board={board} score={score} />
        </div>
    )
}

export default App
