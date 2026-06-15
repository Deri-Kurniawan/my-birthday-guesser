import { useEffect } from "react"
import { useGameManager } from "../hooks/useGameManager"
import { useSoundEffect } from "../hooks/useSoundEffect"
import CardFaceGrid from "./CardFaceGrid"
import MainMenu from "./MainMenu"
import MainMenuButton from "./MainMenuButton"
import MarkThisCardButton from "./MarkThisCardButton"
import ScoreResultDialog from "./ScoreResultDialog"
import SkipThisCardButton from "./SkipThisCardButton"

const Playground = () => {
    const {
        isGameStarted,
        isGameOver,
        isSoundEffectEnabled,
        currentCardDataIndex,
        totalCards,
    } = useGameManager()
    const { playResult: playResultSoundEffect } = useSoundEffect(isSoundEffectEnabled)

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
                            <h2 className="text-xl font-bold mb-4">Card {currentCardDataIndex + 1} of {totalCards}</h2>
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

export default Playground