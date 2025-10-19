import { useRef, useState } from "react"
import { addRandomTile, boardsEqual, createEmptyBoard, type Board, type SlideResult } from "../utils/board"
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/rowOps"

export function useGameLogic() {
    const [board, setBoard] = useState<Board>(() => {
        const b = createEmptyBoard()
        return addRandomTile(addRandomTile(b))
    })
    const [score, setScore] = useState(0)

    // ⛔️ предотвращаем двойное выполнение из-за StrictMode
    const lastActionRef = useRef<number>(0)

    const resetGame = () => {
        const newBoard = addRandomTile(addRandomTile(createEmptyBoard()))
        setBoard(newBoard)
        setScore(0)
    }

    const getUpdatedBoard = (prevBoard: Board, slideResult: SlideResult): Board => {
        if (boardsEqual(prevBoard, slideResult.board)) {
            return prevBoard
        }
        // --- предотвращаем двойное начисление очков ---
        const now = Date.now()
        if (now - lastActionRef.current > 100) {
            setScore((s) => s + slideResult.gainedScore)
            lastActionRef.current = now
        }
        const updated = addRandomTile(slideResult.board)

        return updated
    }

    const slideLeft = () => {
        setBoard((prev) => {
            const slideResult = moveLeft(prev)
            return getUpdatedBoard(prev, slideResult)
        })
    }

    const slideRight = () => {
        setBoard((prev) => {
            const slideResult = moveRight(prev)
            return getUpdatedBoard(prev, slideResult)
        })
    }

    const slideUp = () => {
        setBoard((prev) => {
            const slideResult = moveUp(prev)
            return getUpdatedBoard(prev, slideResult)
        })
    }

    const slideDown = () => {
        setBoard((prev) => {
            const slideResult = moveDown(prev)
            return getUpdatedBoard(prev, slideResult)
        })
    }

    return { board, score, resetGame, slideLeft, slideRight, slideUp, slideDown }
}
