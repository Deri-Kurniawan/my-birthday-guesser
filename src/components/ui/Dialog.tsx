import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { useGameManager } from "../../hooks/useGameManager";
import { useSoundEffect } from "../../hooks/useSoundEffect";
import { cn } from "../../lib/utils";

function Dialog({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return (
        <DialogPrimitive.Root
            data-slot="dialog"
            {...props}
        />
    );
}

function DialogTrigger({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return (
        <DialogPrimitive.Trigger
            data-slot="dialog-trigger"
            {...props}
        />
    );
}

function DialogPortal({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return (
        <DialogPrimitive.Portal
            data-slot="dialog-portal"
            {...props}
        />
    );
}

function DialogClose({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return (
        <DialogPrimitive.Close
            data-slot="dialog-close"
            {...props}
        />
    );
}

function DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={cn(
                "fixed inset-0 z-50",
                "bg-black/70",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                "duration-100 ease-linear",
                className
            )}
            {...props}
        />
    );
}

function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}) {
    const { isSoundEffectEnabled } = useGameManager()
    const { playClick } = useSoundEffect(isSoundEffectEnabled)
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content
                data-slot="dialog-content"
                className={cn(
                    "fixed top-[50%] left-[50%] z-50",
                    "grid w-full max-w-[calc(100%-2rem)] sm:max-w-lg",
                    "-translate-x-1/2 -translate-y-1/2",
                    "bg-white border-4 border-black shadow-[10px_10px_0px_#000] rounded-none",
                    "p-8 gap-6",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
                    "duration-100 ease-linear",
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot="dialog-close"
                        className={cn(
                            "absolute top-3 right-3",
                            "size-10 grid place-items-center",
                            "bg-red-400 border-4 border-black",
                            "shadow-[4px_4px_0px_#000]",
                            "hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000]",
                            "active:translate-x-1 active:translate-y-1 active:shadow-none",
                            "transition-all duration-75 ease-linear",
                        )}
                        onClick={() => {
                            playClick()
                        }}
                    >
                        <XIcon strokeWidth={4} />
                        <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    );
}

function DialogHeader({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "flex flex-col gap-2 text-left",
                className
            )}
            {...props}
        />
    );
}

function DialogFooter({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "flex flex-col gap-3 sm:flex-row sm:justify-end",
                className
            )}
            {...props}
        />
    );
}

function DialogTitle({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn(
                "text-2xl font-black uppercase tracking-widest",
                className
            )}
            {...props}
        />
    );
}

function DialogDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn(
                "text-base font-bold text-black",
                className
            )}
            {...props}
        />
    );
}

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger
};

