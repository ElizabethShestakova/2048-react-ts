import { useEffect, useRef, useState } from "react"
import { addRandomTile, boardsEqual, createEmptyBoard, type Board, type SlideResult } from "../utils/board"
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/rowOps"
import { checkGameIsOver } from "../utils/checkGameIsOver"
import {
    clearBoardState,
    clearGameState,
    loadBoardState,
    loadGameState,
    saveBoardState,
    saveGameState
} from "../utils/storage"

export function useGameLogic() {
    const [board, setBoard] = useState<Board>(() => {
        const saved = loadGameState()
        const board = saved ? saved.board : addRandomTile(addRandomTile(createEmptyBoard()))
        return board
    })
    const [score, setScore] = useState(() => loadGameState()?.score ?? 0)

    const [gameIsOver, setGameIsOver] = useState(false)

    const [bestScore, setBestScore] = useState(() => loadGameState()?.bestScore ?? 0)

    // 💾 сохраняем состояние при каждом изменении
    useEffect(() => {
        saveGameState({ board, score, bestScore })
    }, [board, score, bestScore])

    // ⛔️ предотвращаем двойное выполнение из-за StrictMode
    const lastActionRef = useRef<number>(0)

    const resetGame = () => {
        clearGameState()
        clearBoardState()
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
            // сначала сохраняем доску для возможности отменить ход
            saveBoardState(prev)
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
            // сначала сохраняем доску для возможности отменить ход
            saveBoardState(prev)
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
            // сначала сохраняем доску для возможности отменить ход
            saveBoardState(prev)
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
            // сначала сохраняем доску для возможности отменить ход
            saveBoardState(prev)
            const slideResult = moveDown(prev)
            return getUpdatedBoard(prev, slideResult)
        })
        setTimeout(() => {
            setBoard((b) =>
                b.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false, isMerged: false } : { value: 0 })))
            )
        }, 150)
    }

    const undo = () => {
        const boardState = loadBoardState()
        if (boardState) {
            setBoard(boardState)
            clearBoardState()
        }
    }

    const canUndo = () => {
        return !!loadBoardState()
    }

    return { board, score, resetGame, slideLeft, slideRight, slideUp, slideDown, bestScore, gameIsOver, canUndo, undo }
}
