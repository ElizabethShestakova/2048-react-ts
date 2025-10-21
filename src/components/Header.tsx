interface HeaderProps {
    resetGameFunction: () => void
    toggleDarkMode: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <header className="flex flex-col items-center mb-6">
            <h1 className="text-4xl font-bold mb-5 text-amber-700 dark:text-amber-300 drop-shadow-sm select-none">
                2048
            </h1>

            <div className="flex gap-3">
                {/* 🔄 New Game */}
                <button
                    type="button"
                    className="px-5 py-2 rounded-xl font-semibold 
                    bg-gradient-to-br from-amber-100 to-amber-200 
                    dark:from-stone-700 dark:to-stone-800
                    text-amber-800 dark:text-amber-200
                    shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
                    dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)]
                    active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.6)]
                    dark:active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]
                    hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-3px_-3px_6px_rgba(255,255,255,0.7)]
                    dark:hover:shadow-[4px_4px_8px_rgba(255,255,255,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)]
                    transition-all duration-150 ease-in-out select-none"
                    onClick={props.resetGameFunction}
                >
                    🔄 New Game
                </button>

                {/* 🌗 Switch theme */}
                <button
                    type="button"
                    className="px-4 py-2 rounded-xl font-semibold 
                    bg-gradient-to-br from-slate-100 to-slate-200 
                    dark:from-stone-600 dark:to-stone-700
                    text-slate-700 dark:text-amber-200
                    shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
                    dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)]
                    active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.6)]
                    dark:active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]
                    hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-3px_-3px_6px_rgba(255,255,255,0.7)]
                    dark:hover:shadow-[4px_4px_8px_rgba(255,255,255,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)]
                    transition-all duration-150 ease-in-out select-none"
                    onClick={props.toggleDarkMode}
                >
                    🌗 Switch theme
                </button>
            </div>
        </header>
    )
}
