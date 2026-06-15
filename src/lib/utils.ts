import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function loadSettings(key: string): Record<string, boolean | string> {
    try {
        const raw = localStorage.getItem(key)
        if (raw) return JSON.parse(raw) as Record<string, boolean>
    } catch {
        console.warn("Failed to load settings from localStorage")
    }
    return {
        bgm: true,
        sfx: true,
        language: "en"
    }
}

export function saveSettings(key: string, settings: Record<string, boolean | string>) {
    try {
        localStorage.setItem(key, JSON.stringify(settings))
        return true
    } catch {
        console.warn("Failed to save settings to localStorage")
        return false
    }
}