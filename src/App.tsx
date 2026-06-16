import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import CardFaceGrid from "./components/CardFaceGrid"
import MainMenu from "./components/MainMenu"
import MainMenuButton from "./components/MainMenuButton"
import MarkThisCardButton from "./components/MarkThisCardButton"
import ScoreResultDialog from "./components/ScoreResultDialog"
import SkipThisCardButton from "./components/SkipThisCardButton"
import { useGameManager } from "./hooks/useGameManager"


const App = () => {
  const {
    isGameStarted,
    isGameOver,
    playResultAudio,
    currentCardDataIndex,
    totalCards,
  } = useGameManager()
  const { t } = useTranslation()

  useEffect(() => {
    if (isGameOver) {
      playResultAudio()
    }
  }, [isGameOver, playResultAudio])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isGameStarted ? (
        <motion.div
          key="game"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="min-h-screen flex items-center justify-center p-4 font-mono"
        >
          <div className="flex flex-col gap-4">
            <MainMenuButton />
            <div className="border-4 border-black shadow-[6px_6px_0px_#000] p-2 md:p-4">
              <h2 className="text-xl font-bold mb-4">
                {t("app.cardOf", { current: currentCardDataIndex + 1, total: totalCards })}
              </h2>
              <CardFaceGrid />
              <div className="flex justify-evenly mt-4 gap-4 items-center">
                <MarkThisCardButton className="flex-1" />
                <SkipThisCardButton className="flex-1" />
              </div>
            </div>
            <ScoreResultDialog />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <MainMenu />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App