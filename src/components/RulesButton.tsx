import { BookOpenIcon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/Button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/Dialog'

const RulesButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { t } = useTranslation()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button {...props}>
                    <BookOpenIcon size={24} />
                    {t("rules.button")}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {t("rules.title")}
                    </DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <p>
                                {t("rules.text1")}
                            </p>
                            <p className="mt-4">
                                {t("rules.text2")}
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default RulesButton