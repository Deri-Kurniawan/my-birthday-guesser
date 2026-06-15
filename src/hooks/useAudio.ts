import { useCallback, useRef } from "react"

export function useAudio(src: string, loop = false, volume = 1) {
  const ref = useRef<HTMLAudioElement | null>(null)

  const play = useCallback(() => {
    if (!ref.current) {
      ref.current = new Audio(src)
      ref.current.preload = "auto"
      ref.current.loop = loop
      ref.current.volume = volume
    }
    if (!ref.current.paused) return
    ref.current.currentTime = 0
    ref.current.play().catch(() => {})
  }, [src, loop, volume])

  const stop = useCallback(() => {
    if (ref.current) {
      ref.current.pause()
      ref.current.currentTime = 0
    }
  }, [])

  return { play, stop }
}
