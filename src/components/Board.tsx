import useSwipe from "../hooks/useSwipe"
import { type Board } from "../utils/board"
import Tile from "./Tile"

interface BoardProps {
    board: Board
    onMoveLeft: () => void
    onMoveRight: () => void
    onMoveUp: () => void
    onMoveDown: () => void
}

export default function Board(props: BoardProps) {
    useSwipe({
        onSwipeLeft: props.onMoveLeft,
        onSwipeRight: props.onMoveRight,
        onSwipeUp: props.onMoveUp,
        onSwipeDown: props.onMoveDown
    })

    return (
        <div
            className="w-[90vw] max-w-[360px] mx-auto 
                bg-gradient-to-br from-stone-400 to-stone-300 
                dark:from-stone-800 dark:to-stone-700 
                p-4 rounded-[1.5rem]
                shadow-[inset_0_4px_8px_rgba(255,255,255,0.5),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.25)]
                border border-stone-300 dark:border-stone-600"
            style={{ touchAction: "none" }}
        >
            <div className="grid grid-cols-4 gap-3" style={{ gridAutoRows: "1fr" }}>
                {props.board.map((row, r) =>
                    row.map((cell, c) => (
                        <Tile key={`${r}-${c}-${cell.value}`} cellValue={cell} position={{ row: r, col: c }} />
                    ))
                )}
            </div>
        </div>
    )
}
