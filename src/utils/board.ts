export interface CellValue {
    value: number
    isNew?: boolean
    isMerged?: boolean
}
export type Board = CellValue[][]
export interface SlideResult {
    board: Board
    gainedScore: number
}

export function createEmptyBoard(): Board {
    return Array.from({ length: 4 }, () => Array(4).fill({ value: 0 }))
}

export function addRandomTile(board: Board): Board {
    const emptyCells: [number, number][] = []

    board.forEach((row, r) =>
        row.forEach((cell, c) => {
            if (cell.value === 0) emptyCells.push([r, c])
        })
    )

    if (emptyCells.length === 0) return board

    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    const newBoard = board.map((row) => row.map((cell) => (cell ? { ...cell, isNew: false } : { value: 0 })))
    newBoard[r][c] = { value: Math.random() < 0.9 ? 2 : 4, isNew: true }
    return newBoard
}

export function boardsEqual(a: Board, b: Board) {
    return a.every((row, i) => row.every((val, j) => val === b[i][j]))
}
