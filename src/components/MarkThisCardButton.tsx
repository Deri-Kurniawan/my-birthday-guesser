import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameManager } from '../hooks/useGameManager'
import { Button } from './ui/Button'

const MarkThisCardButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { submitAnswer, goToNextCard } = useGameManager()
    const { t } = useTranslation()

    return (
        <Button
            onClick={() => {
                submitAnswer()
                goToNextCard()
            }}
            {...props}
        >
            {t("markThisCard")}
        </Button>
    )
}

export default MarkThisCardButton