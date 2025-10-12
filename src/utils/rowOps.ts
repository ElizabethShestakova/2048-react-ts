import { createEmptyBoard, type Board, type CellValue, type SlideResult } from "./board"

function slideRowLeft(board: Board): SlideResult {
    let gainedScore = 0
    // убираем пустые
    const newBoard = board.map((row) => {
        const filtered = row.filter((cell) => cell !== 0)

        // объединяем одинаковые
        for (let i = 0; i < filtered.length - 1; i++) {
            if (filtered[i] === filtered[i + 1]) {
                const mergedValue = filtered[i] * 2
                filtered[i] = mergedValue
                filtered[i + 1] = 0
                gainedScore += mergedValue
            }
        }

        // убираем нули после слияния
        const compacted: CellValue[] = filtered.filter((v) => v !== 0)

        // добавляем null до длины 4
        while (compacted.length < 4) {
            compacted.push(0)
        }
        return compacted
    })

    return { board: newBoard, gainedScore }
}

function rotateBoardClockwise(board: Board): Board {
    const newBoard = createEmptyBoard()
    const size = board.length
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            newBoard[c][size - r - 1] = board[r][c]
        }
    }
    return newBoard
}

function rotateBoardCounterClockwise(board: Board): Board {
    const newBoard = createEmptyBoard()
    const size = board.length
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            newBoard[size - c - 1][r] = board[r][c]
        }
    }

    return newBoard
}

export function moveLeft(board: Board): SlideResult {
    return slideRowLeft(board)
}

export function moveRight(board: Board): SlideResult {
    const rotatedBoard = board.map((row) => [...row].reverse())
    const updated = slideRowLeft(rotatedBoard)
    return { board: updated.board.map((row) => [...row].reverse()), gainedScore: updated.gainedScore }
}

export function moveUp(board: Board): SlideResult {
    const rotatedBoard = rotateBoardCounterClockwise(board)
    const updated = slideRowLeft(rotatedBoard)
    return { board: rotateBoardClockwise(updated.board), gainedScore: updated.gainedScore }
}

export function moveDown(board: Board): SlideResult {
    const rotatedBoard = rotateBoardClockwise(board)
    const updated = slideRowLeft(rotatedBoard)
    return { board: rotateBoardCounterClockwise(updated.board), gainedScore: updated.gainedScore }
}
