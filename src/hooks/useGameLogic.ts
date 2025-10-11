import { useState, useEffect } from "react"
import { addRandomTile, createEmptyBoard, type Board } from "../utils/board"

export function useGameLogic() {
    const [board, setBoard] = useState<Board>(createEmptyBoard())
    const [score, setScore] = useState(0)

    const resetGame = () => {
        let newBoard = createEmptyBoard()
        newBoard = addRandomTile(addRandomTile(newBoard)) // две стартовые плитки
        setBoard(newBoard)
        setScore(0)
    }

    // инициализация при первом рендере
    useEffect(() => {
        resetGame()
    }, [])

    return { board, score, resetGame }
}
