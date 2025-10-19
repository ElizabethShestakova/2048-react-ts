import { useEffect, useRef } from "react"

interface SwipeConfig {
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    onSwipeUp?: () => void
    onSwipeDown?: () => void
    threshold?: number // минимальная длина свайпа в пикселях
}

export default function useSwipe({ onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold = 40 }: SwipeConfig) {
    const startX = useRef(0)
    const startY = useRef(0)
    const endX = useRef(0)
    const endY = useRef(0)

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0]
            startX.current = touch.clientX
            startY.current = touch.clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0]
            endX.current = touch.clientX
            endY.current = touch.clientY
        }

        const handleTouchEnd = () => {
            const dx = endX.current - startX.current
            const dy = endY.current - startY.current

            if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) return

            if (Math.abs(dx) > Math.abs(dy)) {
                dx > 0 ? onSwipeRight?.() : onSwipeLeft?.()
            } else {
                dy > 0 ? onSwipeDown?.() : onSwipeUp?.()
            }
        }

        document.addEventListener("touchstart", handleTouchStart)
        document.addEventListener("touchmove", handleTouchMove)
        document.addEventListener("touchend", handleTouchEnd)

        return () => {
            document.removeEventListener("touchstart", handleTouchStart)
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)
        }
    }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold])
}
