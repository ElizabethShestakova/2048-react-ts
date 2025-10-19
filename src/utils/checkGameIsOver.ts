import type { Board } from "./board"

export function checkGameIsOver(board: Board): boolean {
    // если есть пустая клетка — не конец
    if (hasEmptyCell(board)) return false

    // если можно сделать хотя бы один ход — не конец
    if (canMove(board)) return false

    // иначе — конец
    return true
}

function hasEmptyCell(board: Board): boolean {
    return board.some((row) => row.some((cell) => cell === 0))
}

function canMove(board: Board): boolean {
    const size = board.length

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const current = board[r][c]
            if (current === 0) continue

            // можно ли объединить с соседом
            if (r < size - 1 && board[r + 1][c] === current) return true
            if (c < size - 1 && board[r][c + 1] === current) return true
        }
    }
    return false
}
