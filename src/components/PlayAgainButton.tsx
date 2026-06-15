import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameManager } from '../hooks/useGameManager'
import { Button } from './ui/Button'

const PlayAgainButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { playAgain } = useGameManager()
    const { t } = useTranslation()

    return (
        <Button onClick={playAgain} {...props}>
            {t("playAgain")}
        </Button>
    )
}

export default PlayAgainButton