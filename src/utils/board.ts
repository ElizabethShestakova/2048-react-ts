export type CellValue = number | null // 2, 4, 8 ... или пустая ячейка
export type Board = CellValue[][]

export function createEmptyBoard(): Board {
    return Array.from({ length: 4 }, () => Array(4).fill(null))
}

export function addRandomTile(board: Board): Board {
    const emptyCells: [number, number][] = []

    board.forEach((row, r) =>
        row.forEach((cell, c) => {
            if (cell === null) emptyCells.push([r, c])
        })
    )

    if (emptyCells.length === 0) return board

    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    const value = Math.random() < 0.9 ? 2 : 4
    const newBoard = board.map((row) => [...row])
    newBoard[r][c] = value
    return newBoard
}
