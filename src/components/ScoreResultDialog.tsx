import { useTranslation } from 'react-i18next'
import { useGameManager } from '../hooks/useGameManager'
import MainMenuButton from './MainMenuButton'
import PlayAgainButton from './PlayAgainButton'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/Dialog"

const ScoreResultDialog = () => {
    const {
        score,
        isGameOver,
    } = useGameManager()
    const { t } = useTranslation()
    return (
        <Dialog
            open={isGameOver}
        >
            <DialogContent className="**:data-[slot=dialog-close]:hidden">
                <DialogHeader>
                    <DialogTitle>
                        {t("scoreResult.title")}
                    </DialogTitle>
                    <h4 className="text-4xl font-bold text-center mt-4">
                        {score > 0 ? score : t("scoreResult.mystery")}
                    </h4>
                </DialogHeader>
                <DialogDescription className="text-center">
                    {score > 0 ? t("scoreResult.correct") : t("scoreResult.incorrect")}
                </DialogDescription>
                <DialogFooter>
                    <MainMenuButton />
                    <PlayAgainButton />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ScoreResultDialog