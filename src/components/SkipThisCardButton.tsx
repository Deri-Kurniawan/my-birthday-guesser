import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameManager } from '../hooks/useGameManager'
import { Button } from './ui/Button'

const SkipThisCardButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { skipcurrentCardData, goToNextCard } = useGameManager()
    const { t } = useTranslation()

    return (
        <Button
            variant="destructive"
            onClick={() => {
                skipcurrentCardData()
                goToNextCard()
            }}
            {...props}
        >
            {t("skip")}
        </Button>
    )
}

export default SkipThisCardButton