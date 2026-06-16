"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type * as React from "react";
import { useGameManager } from "../../hooks/useGameManager";
import { useSoundEffect } from "../../hooks/useSoundEffect";
import { cn } from "../../lib/utils";

function Select({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
    const { isSoundEffectEnabled } = useGameManager()
    const { playClick } = useSoundEffect(isSoundEffectEnabled)
    return <SelectPrimitive.Root data-slot="select" {...props} onOpenChange={(open) => {
        playClick()
        props.onOpenChange?.(open)
    }} />;
}

function SelectGroup({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
    className,
    size = "default",
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                // Brutalism base: no border-radius, thick black border, offset shadow
                "inline-flex w-fit items-center justify-between gap-2 whitespace-nowrap",
                "rounded-none border-4 border-black bg-white",
                "font-black uppercase tracking-widest text-black",
                "shadow-[6px_6px_0px_#000]",
                // Hover: push down-right, shrink shadow
                "hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[3px_3px_0px_#000]",
                // Active: fully pressed
                "active:translate-x-1.5 active:translate-y-1.5 active:shadow-none",
                // Focus
                "outline-none focus-visible:ring-[3px] focus-visible:ring-black focus-visible:ring-offset-0",
                // Disabled
                "disabled:pointer-events-none disabled:opacity-50",
                // Placeholder
                "data-placeholder:text-black/40",
                // Size variants
                "data-[size=default]:h-12 data-[size=default]:px-4 data-[size=default]:text-base",
                "data-[size=sm]:h-8 data-[size=sm]:px-3 data-[size=sm]:text-sm",
                // Icon
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                // SelectValue slot
                "*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
                "transition-all",
                className,
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDownIcon className="size-4 opacity-70" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
    className,
    children,
    position = "popper",
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                className={cn(
                    // Brutalism dropdown: thick border, hard shadow, no radius
                    "relative z-50 rounded-none border-4 border-black bg-white",
                    "shadow-[6px_6px_0px_#000]",
                    "max-h-(--radix-select-content-available-height) min-w-32",
                    "overflow-x-hidden overflow-y-auto",
                    // Animations
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
                    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    "origin-(--radix-select-content-transform-origin)",
                    position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className,
                )}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                        "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1",
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn(
                "px-2 py-1.5 text-xs font-black uppercase tracking-widest text-black/50",
                className,
            )}
            {...props}
        />
    );
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                // Brutalism item: bold text, hard black focus state
                "relative flex w-full cursor-default select-none items-center gap-2",
                "rounded-none py-2 pr-8 pl-2",
                "text-sm font-bold uppercase tracking-wider text-black",
                "outline-none",
                // Focus/hover: invert (black bg, white text)
                "focus:bg-black focus:text-white",
                // Selected indicator color fix on focus
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                "data-disabled:pointer-events-none data-disabled:opacity-50",
                "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
                className,
            )}
            {...props}
        >
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="size-4" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}

function SelectSeparator({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn(
                "pointer-events-none -mx-1 my-1 h-0.5 bg-black",
                className,
            )}
            {...props}
        />
    );
}

function SelectScrollUpButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    return (
        <SelectPrimitive.ScrollUpButton
            data-slot="select-scroll-up-button"
            className={cn(
                "flex cursor-default items-center justify-center border-b-2 border-black py-1",
                className,
            )}
            {...props}
        >
            <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpButton>
    );
}

function SelectScrollDownButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            data-slot="select-scroll-down-button"
            className={cn(
                "flex cursor-default items-center justify-center border-t-2 border-black py-1",
                className,
            )}
            {...props}
        >
            <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownButton>
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue
};

