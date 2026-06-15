import { useCallback } from "react"
import { useAudio } from "./useAudio"

export function useSoundEffect(enabled: boolean = true) {
  const { play: playClick } = useAudio("/assets/audio/click.mp3")
  const { play: playResult } = useAudio("/assets/audio/result.mp3")

  const safePlayClick = useCallback(() => {
    if (enabled) playClick()
  }, [enabled, playClick])

  const safePlayResult = useCallback(() => {
    if (enabled) playResult()
  }, [enabled, playResult])

  return { playClick: safePlayClick, playResult: safePlayResult }
}
