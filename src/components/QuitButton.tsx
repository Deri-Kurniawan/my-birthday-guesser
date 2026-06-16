import { LogOutIcon } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";


const QuitButton: FC<ComponentProps<typeof Button>> = (props) => {
    const { t } = useTranslation()
    const onQuit = () => {
        window.close();

        setTimeout(() => {
            if (!window.closed) {
                window.location.replace('about:blank');
            }
        }, 300);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" {...props}>
                    <LogOutIcon size={24} />
                    {t("quit.button")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("quit.title")}</DialogTitle>
                    <DialogDescription>
                        {t("quit.description")}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="destructive" onClick={onQuit}>
                        {t("quit.confirm")}
                    </Button>
                    <DialogClose asChild>
                        <Button variant="default">
                            {t("quit.cancel")}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default QuitButton