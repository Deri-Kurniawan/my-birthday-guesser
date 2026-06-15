import { Globe2Icon, Music2Icon, SettingsIcon } from "lucide-react";
import type { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameManager } from '../hooks/useGameManager';
import { Button } from './ui/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";


const SettingsButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { isBgMusicEnabled, toggleBgMusic, isSoundEffectEnabled, toggleSoundEffect, language, setLanguage } = useGameManager()
    const { t } = useTranslation()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" {...props}>
                    <SettingsIcon size={24} />
                    {t("settings.button")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {t("settings.title")}
                    </DialogTitle>
                    <DialogDescription>
                        {t("settings.description")}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-full justify-between">
                            <Globe2Icon size={24} />
                            <SelectValue placeholder={t("settings.selectLanguage")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">{t("languages.en")}</SelectItem>
                            <SelectItem value="id">{t("languages.id")}</SelectItem>
                            <SelectItem value="su">{t("languages.su")}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        className="inline-flex items-center justify-between"
                        variant="default"
                        onClick={toggleBgMusic}
                    >
                        <span className="relative">
                            <Music2Icon size={24} />
                            {!isBgMusicEnabled && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4 h-0.5 bg-red-500 rotate-45"></div>
                                </span>
                            )}
                        </span>
                        <span>{t("settings.bgm", { status: isBgMusicEnabled ? t("settings.on") : t("settings.off") })}</span>
                        <span />
                    </Button>
                    <Button
                        className="inline-flex items-center justify-between"
                        variant="default"
                        onClick={toggleSoundEffect}
                    >
                        <span className="relative">
                            <Music2Icon size={24} />
                            {!isSoundEffectEnabled && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4 h-0.5 bg-red-500 rotate-45"></div>
                                </span>
                            )}
                        </span>
                        <span>{t("settings.sfx", { status: isSoundEffectEnabled ? t("settings.on") : t("settings.off") })}</span>
                        <span />
                    </Button>

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsButton