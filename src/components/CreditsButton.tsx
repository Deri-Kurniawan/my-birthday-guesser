import { CopyrightIcon } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";

const CreditsButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { t } = useTranslation()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" {...props}>
                    <CopyrightIcon size={24} />
                    {t("credits.button")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {t("credits.title")}
                    </DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <p className="font-bold text-xs tracking-widest uppercase mb-2">
                                {t("licenses.title")}
                            </p>
                            <div className="space-y-2 text-xs">
                                <p>
                                    <span className="font-semibold">BGM:</span> — Innovating Care by Aylex
                                    <br />
                                    <a href="https://freetouse.com/music" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">freetouse.com/music</a>
                                </p>
                                <p>
                                    <span className="font-semibold">Click:</span>
                                    <br />
                                    <a href="https://uppbeat.io/sfx/futuristic-ui-digital-click/167896/56451" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">uppbeat.io</a>
                                </p>
                                <p>
                                    <span className="font-semibold">Result:</span>
                                    <br />
                                    <a href="https://uppbeat.io/sfx/alert-positive-digital-marimba/178987/79620" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">uppbeat.io</a>
                                </p>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreditsButton