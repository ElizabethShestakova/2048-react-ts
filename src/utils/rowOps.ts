import type { Board, CellValue } from "./board"

function slideRowLeft(row: CellValue[]) {
    // убираем пустые
    const filtered = row.filter((cell) => cell !== 0)

    // объединяем одинаковые
    for (let i = 0; i < filtered.length - 1; i++) {
        if (filtered[i] === filtered[i + 1]) {
            filtered[i] *= 2
            filtered[i + 1] = 0
        }
    }

    // убираем нули после слияния
    const compacted: CellValue[] = filtered.filter((v) => v !== 0)

    // добавляем null до длины 4
    while (compacted.length < 4) {
        compacted.push(0)
    }

    return compacted
}

export function moveLeft(board: Board): Board {
    return board.map((row) => slideRowLeft(row))
}
