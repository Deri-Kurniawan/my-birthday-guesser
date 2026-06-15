import { User2Icon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { GitHubIcon } from './icons/GitHubIcon'
import { Button } from './ui/Button'

const CreatorButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { t } = useTranslation()

    return (
        <div className="flex justify-center items-center gap-4">
            <Button
                className="flex-1 justify-start"
                asChild
                {...props}
            >
                <a href="https://www.derikn.com/" target="_blank" rel="noopener noreferrer">
                    <User2Icon size={24} />
                    {t("creator.button")}
                </a>
            </Button>
            <Button
                asChild
                size="icon"
            >
                <a href="https://github.com/Deri-Kurniawan/my-birthday-guesser" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="size-6" />
                    <span className="sr-only">{t("creator.sourceCode")}</span>
                </a>
            </Button>
        </div>
    )
}

export default CreatorButton