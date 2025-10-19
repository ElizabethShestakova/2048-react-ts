import { useRef, useState } from "react"
import { addRandomTile, boardsEqual, createEmptyBoard, type Board, type SlideResult } from "../utils/board"
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/rowOps"
import { checkGameIsOver } from "../utils/checkGameIsOver"

export function useGameLogic() {
    const [board, setBoard] = useState<Board>(() => {
        const b = createEmptyBoard()
        return addRandomTile(addRandomTile(b))
    })
    const [score, setScore] = useState(0)

    const [gameIsOver, setGameIsOver] = useState(false)

    const [bestScore, setBestScore] = useState(() => {
        const saved = localStorage.getItem("bestScore")
        return saved ? parseInt(saved, 10) : 0
    })

    // ⛔️ предотвращаем двойное выполнение из-за StrictMode
    const lastActionRef = useRef<number>(0)

    const resetGame = () => {
        const newBoard = addRandomTile(addRandomTile(createEmptyBoard()))
        setBoard(newBoard)
        setScore(0)
        setGameIsOver(false)
    }

    const getUpdatedBoard = (prevBoard: Board, slideResult: SlideResult): Board => {
        if (boardsEqual(prevBoard, slideResult.board)) {
            return prevBoard
        }
        // --- предотвращаем двойное начисление очков ---
        const now = Date.now()
        if (now - lastActionRef.current > 100) {
            setScore((s) => {
                const newScore = s + slideResult.gainedScore
                if (newScore > bestScore) {
                    setBestScore(newScore)
                    localStorage.setItem("bestScore", newScore.toString())
                }
                return newScore
            })
            lastActionRef.current = now
        }
        const updated = addRandomTile(slideResult.board)

        if (checkGameIsOver(updated)) {
            setGameIsOver(true)
        }

        return updated
    }

    const slideLeft = () => {
        setBoard((prev) => {
            const slideResult = moveLeft(prev)
            return getUpdatedBoard(prev, slideResult)
        })
        setTimeout(() => {
            setBoard((b) =>
                b.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false, isMerged: false } : { value: 0 })))
            )
        }, 150)
    }

    const slideRight = () => {
        setBoard((prev) => {
            const slideResult = moveRight(prev)
            return getUpdatedBoard(prev, slideResult)
        })
        setTimeout(() => {
            setBoard((b) =>
                b.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false, isMerged: false } : { value: 0 })))
            )
        }, 150)
    }

    const slideUp = () => {
        setBoard((prev) => {
            const slideResult = moveUp(prev)
            return getUpdatedBoard(prev, slideResult)
        })
        setTimeout(() => {
            setBoard((b) =>
                b.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false, isMerged: false } : { value: 0 })))
            )
        }, 150)
    }

    const slideDown = () => {
        setBoard((prev) => {
            const slideResult = moveDown(prev)
            return getUpdatedBoard(prev, slideResult)
        })
        setTimeout(() => {
            setBoard((b) =>
                b.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false, isMerged: false } : { value: 0 })))
            )
        }, 150)
    }

    return { board, score, resetGame, slideLeft, slideRight, slideUp, slideDown, bestScore, gameIsOver }
}
