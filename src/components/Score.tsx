interface ScoreProps {
    score: number
    bestScore: number
}

export default function Score(props: ScoreProps) {
    return (
        <div className="flex gap-2 my-4">
            <div
                className="px-3 py-1 rounded-lg bg-gradient-to-br from-white/80 to-amber-50/60 
                    dark:from-slate-600 dark:to-slate-700
                    shadow-[inset_2px_2px_4px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.15)]"
            >
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">SCORE</p>
                <p className="text-lg font-bold text-gray-800 dark:text-amber-100">{props.score}</p>
            </div>
            <div
                className="px-3 py-1 rounded-lg bg-gradient-to-br from-white/80 to-amber-50/60 
                    dark:from-slate-600 dark:to-slate-700
                    shadow-[inset_2px_2px_4px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.15)]"
            >
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">BEST</p>
                <p className="text-lg font-bold text-gray-800 dark:text-amber-100">{props.bestScore}</p>
            </div>
        </div>
    )
}
