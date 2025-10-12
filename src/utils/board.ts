export type CellValue = number // 2, 4, 8 ... или пустая ячейка
export type Board = CellValue[][]

export function createEmptyBoard(): Board {
    return Array.from({ length: 4 }, () => Array(4).fill(0))
}

export function addRandomTile(board: Board): Board {
    const emptyCells: [number, number][] = []

    board.forEach((row, r) =>
        row.forEach((cell, c) => {
            if (cell === 0) emptyCells.push([r, c])
        })
    )

    if (emptyCells.length === 0) return board

    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    const value = Math.random() < 0.9 ? 2 : 4
    const newBoard = board.map((row) => [...row])
    newBoard[r][c] = value
    return newBoard
}

export function boardsEqual(a: number[][], b: number[][]) {
    return a.every((row, i) => row.every((val, j) => val === b[i][j]))
}
