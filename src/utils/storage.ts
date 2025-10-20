import type { Board } from "./board"

const STORAGE_KEY = "gameState2048"

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
