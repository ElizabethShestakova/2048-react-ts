import { useState } from "react"
import { addRandomTile, boardsEqual, createEmptyBoard, type Board } from "../utils/board"
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/rowOps"

export function useGameLogic() {
    const [board, setBoard] = useState<Board>(() => {
        const b = createEmptyBoard()
        return addRandomTile(addRandomTile(b))
    })
    const [score, setScore] = useState(0)

    const resetGame = () => {
        const newBoard = addRandomTile(addRandomTile(createEmptyBoard()))
        setBoard(newBoard)
        setScore(0)
    }

    const slideLeft = () => {
        setBoard((prev) => {
            const newBoard = moveLeft(prev)
            if (boardsEqual(prev, newBoard)) {
                return prev
            }

            const updated = addRandomTile(newBoard)

            return updated
        })
    }

    const slideRight = () => {
        setBoard((prev) => {
            const newBoard = moveRight(prev)
            if (boardsEqual(prev, newBoard)) {
                return prev
            }

            const updated = addRandomTile(newBoard)

            return updated
        })
    }

    const slideUp = () => {
        setBoard((prev) => {
            const newBoard = moveUp(prev)
            if (boardsEqual(prev, newBoard)) {
                return prev
            }

            const updated = addRandomTile(newBoard)

            return updated
        })
    }

    const slideDown = () => {
        setBoard((prev) => {
            const newBoard = moveDown(prev)
            if (boardsEqual(prev, newBoard)) {
                return prev
            }

            const updated = addRandomTile(newBoard)

            return updated
        })
    }

    return { board, score, resetGame, slideLeft, slideRight, slideUp, slideDown }
}
