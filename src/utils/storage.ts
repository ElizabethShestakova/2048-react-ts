import type { Board } from "./board"

const STORAGE_KEY = "gameState2048"
const BOARD_KEY = "boardState"

export interface SavedGame {
    board: Board
    score: number
    bestScore: number
}

export function saveGameState(state: SavedGame) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
        console.warn("Failed to save game:", e)
    }
}

export function loadGameState(): SavedGame | null {
    try {
        const data = localStorage.getItem(STORAGE_KEY)
        if (!data) return null
        return JSON.parse(data)
    } catch (e) {
        console.warn("Failed to load game:", e)
        return null
    }
}

export function clearGameState() {
    localStorage.removeItem(STORAGE_KEY)
}

export function saveBoardState(board: Board) {
    try {
        localStorage.setItem(BOARD_KEY, JSON.stringify(board))
    } catch (e) {
        console.warn("Failed to save board state:", e)
    }
}

export function loadBoardState(): Board | null {
    try {
        const data = localStorage.getItem(BOARD_KEY)
        if (!data) return null
        return JSON.parse(data)
    } catch (e) {
        console.warn("Failed to load board state:", e)
        return null
    }
}

export function clearBoardState() {
    localStorage.removeItem(BOARD_KEY)
}
