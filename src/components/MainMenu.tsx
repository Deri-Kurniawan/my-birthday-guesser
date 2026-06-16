import { useTranslation } from "react-i18next";
import CreatorButton from "./CreatorButton";
import CreditsButton from "./CreditsButton";
import QuitButton from "./QuitButton";
import RulesButton from "./RulesButton";
import SettingsButton from "./SettingsButton";
import StartButton from "./StartButton";

const MainMenu = () => {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-mono">
            <div className="flex flex-col items-center gap-0 w-full max-w-sm shadow-[6px_6px_0px_#000]">
                <div className="w-full border-4 px-6 py-5 bg-black">
                    <div className="flex justify-between gap-1">
                        <p className="text-yellow-500 text-xl font-black tracking-tight mb-1">✦ ★ ✦</p>
                        <p className="text-yellow-500 text-xl font-black tracking-tight mb-1">v1.0.0</p>
                    </div>
                    <h1 className="text-4xl font-black uppercase text-[#f5f0e8] whitespace-pre-line">
                        {t("app.title")}
                    </h1>
                </div>
                <div className="w-full border-4 border-t-0 border-black bg-[#f5f0e8] p-5 flex flex-col gap-3">
                    <StartButton className="w-full justify-start gap-3" />
                    <RulesButton className="w-full justify-start gap-3" />
                    <SettingsButton className="w-full justify-start gap-3" />
                    <CreditsButton className="w-full justify-start gap-3" />
                    <CreatorButton />
                    <QuitButton className="w-full justify-start gap-3" />
                </div>
            </div>
        </div>
    );
};

export default MainMenu;