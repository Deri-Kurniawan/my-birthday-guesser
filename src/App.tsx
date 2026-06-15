import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useGameManager } from "./hooks/useGameManager"
import { useSoundEffect } from "./hooks/useSoundEffect"
import MainMenuButton from "./components/MainMenuButton"
import CardFaceGrid from "./components/CardFaceGrid"
import MarkThisCardButton from "./components/MarkThisCardButton"
import SkipThisCardButton from "./components/SkipThisCardButton"
import ScoreResultDialog from "./components/ScoreResultDialog"
import MainMenu from "./components/MainMenu"


const App = () => {
  const {
    isGameStarted,
    isGameOver,
    isSoundEffectEnabled,
    currentCardDataIndex,
    totalCards,
  } = useGameManager()
  const { playResult: playResultSoundEffect } = useSoundEffect(isSoundEffectEnabled)
  const { t } = useTranslation()

  useEffect(() => {
    if (isGameOver) {
      playResultSoundEffect()
    }
  }, [isGameOver, playResultSoundEffect])

  return (
    <>
      {isGameStarted ? (
        <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center p-4 font-mono">
          <div className="flex flex-col gap-4">
            <MainMenuButton />
            <div className="border-4 border-black shadow-[6px_6px_0px_#000] p-2 md:p-4 bg-[#f5f0e8]">
              <h2 className="text-xl font-bold mb-4">{t("app.cardOf", { current: currentCardDataIndex + 1, total: totalCards })}</h2>
              <CardFaceGrid />
              <div className="flex justify-evenly mt-4 gap-4 items-center">
                <MarkThisCardButton className="flex-1" />
                <SkipThisCardButton className="flex-1" />
              </div>
            </div>
            <ScoreResultDialog />
          </div>
        </div>
      ) : (
        <MainMenu />
      )}
    </>
  )
}

export default App