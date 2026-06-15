import { PlayIcon } from 'lucide-react'
import { useGameManager } from '../hooks/useGameManager'
import { Button } from './ui/Button'
import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'

const StartButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { startGame } = useGameManager()
    const { t } = useTranslation()

    return (
        <Button variant="warning" onClick={startGame} {...props}>
            <PlayIcon size={24} />
            {t("start")}
        </Button>
    )
}

export default StartButton