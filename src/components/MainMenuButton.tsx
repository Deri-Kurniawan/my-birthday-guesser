import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameManager } from '../hooks/useGameManager'
import { Button } from './ui/Button'

const MainMenuButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { resetGame } = useGameManager()
    const { t } = useTranslation()

    return (
        <Button
            variant="warning"
            onClick={resetGame}
            {...props}
        >
            {t("mainMenu")}
        </Button>
    )
}

export default MainMenuButton