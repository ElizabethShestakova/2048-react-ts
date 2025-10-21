interface FooterProps {
    onUndo: () => void
    disabled?: boolean
}

export default function Footer(props: FooterProps) {
    return (
        <header className="flex flex-col items-center mt-6">
            <button
                type="button"
                className={`px-4 py-2 rounded-xl font-semibold 
                    bg-gradient-to-br from-slate-100 to-slate-200 
                    dark:from-stone-600 dark:to-stone-700
                    text-slate-700 dark:text-amber-200
                    shadow-[4px_4px_8px_rgba(255,255,255,0.6),-3px_-3px_6px_rgba(255,255,255,0.7)]
                    dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)]
                    transition-all duration-150 ease-in-out select-none ${
                        props.disabled
                            ? "cursor-not-allowed opacity-50 "
                            : "hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-3px_-3px_6px_rgba(255,255,255,0.7)] dark:hover:shadow-[4px_4px_8px_rgba(255,255,255,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] dark:active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]"
                    }`}
                onClick={props.onUndo}
                disabled={props.disabled}
            >
                ↻ Undo
            </button>
        </header>
    )
}
