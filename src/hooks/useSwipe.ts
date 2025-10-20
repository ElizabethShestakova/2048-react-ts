import { useEffect, useRef } from "react"

interface SwipeConfig {
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    onSwipeUp?: () => void
    onSwipeDown?: () => void
}

const MIN_SWIPE_DISTANCE = 40 // px

export default function useSwipe(
    { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }: SwipeConfig,
    ref?: React.RefObject<HTMLElement>
) {
    const startX = useRef(0)
    const startY = useRef(0)

    useEffect(() => {
        const element = ref?.current
        if (!element) return
        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0]
            startX.current = touch.clientX
            startY.current = touch.clientY
        }

        const handleTouchEnd = (e: TouchEvent) => {
            const touch = e.changedTouches[0]
            const dx = touch.clientX - startX.current
            const dy = touch.clientY - startY.current

            if (Math.abs(dx) < MIN_SWIPE_DISTANCE && Math.abs(dy) < MIN_SWIPE_DISTANCE) return

            if (Math.abs(dx) > Math.abs(dy)) {
                dx > 0 ? onSwipeRight?.() : onSwipeLeft?.()
            } else {
                dy > 0 ? onSwipeDown?.() : onSwipeUp?.()
            }
        }

        element.addEventListener("touchstart", handleTouchStart)
        element.addEventListener("touchend", handleTouchEnd)

        return () => {
            element.removeEventListener("touchstart", handleTouchStart)
            element.removeEventListener("touchend", handleTouchEnd)
        }
    }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, ref])
}
