import { useCallback, useEffect, useRef } from "react"

export function useAudio(src: string, loop = false, volume = 1, allowReplay = false) {
  const ref = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = "auto"
    audio.loop = loop
    audio.volume = volume
    ref.current = audio

    return () => {
      audio.pause()
      audio.src = ""
      ref.current = null
    }
  }, [src, loop, volume])

  const play = useCallback(() => {
    const audio = ref.current
    if (!audio) return
    if (!allowReplay && !audio.paused) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }, [allowReplay])

  const stop = useCallback(() => {
    const audio = ref.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
  }, [])

  return { play, stop }
}
