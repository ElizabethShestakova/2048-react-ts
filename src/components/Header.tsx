interface HeaderProps {
    resetGameFunction: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 text-amber-700 dark:text-amber-300">2048</h1>
            <div>
                <button
                    type="button"
                    className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-br from-amber-100 to-amber-200 
             shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
             active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]
             transition-all duration-150 ease-in-out select-none"
                    onClick={props.resetGameFunction}
                >
                    🔄 New Game
                </button>
                <button
                    type="button"
                    className="px-4 py-2 rounded-xl ml-3 font-semibold bg-gradient-to-br from-slate-100 to-slate-200 
             shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
             active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]
             transition-all duration-150 ease-in-out select-none"
                >
                    🌗 Dark theme
                </button>
            </div>
        </>
    )
}
