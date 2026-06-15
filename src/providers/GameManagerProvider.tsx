import { useCallback, useEffect, useState, type ReactNode } from "react"
import i18n from "../i18n"
import { GameManagerContext } from "../context/GameManagerContext"
import { data as defaultData } from "../data"
import { useAudio } from "../hooks/useAudio"
import { useDisclosure } from "../hooks/useDisclosure"
import { loadSettings, saveSettings } from "../lib/utils"

const LS_KEY = "birthday-guesser-settings"

interface GameManagerProviderProps {
    children: ReactNode
    initialData?: number[][]
}

export const GameManagerProvider = ({ children, initialData = defaultData }: GameManagerProviderProps) => {
    const { isOpen: isGameStarted, handler: gameStartHandler } = useDisclosure()
    const { isOpen: isGameOver, handler: gameOverHandler } = useDisclosure()
    const { isOpen: isBgMusicEnabled, handler: backgroundMusicHandler } = useDisclosure((loadSettings(LS_KEY).bgm ?? false) as boolean)
    const { isOpen: isSoundEffectEnabled, handler: soundEffectHandler } = useDisclosure((loadSettings(LS_KEY).sfx ?? true) as boolean)
    const [language, setLanguageState] = useState<string>((loadSettings(LS_KEY).language as string) ?? "en")

    const setLanguage = useCallback((lang: string) => {
        setLanguageState(lang)
        i18n.changeLanguage(lang)
    }, [])

    const [score, setScore] = useState<number>(0)
    const [answers, setAnswers] = useState<number[]>([])
    const [currentCardDataIndex, setCurrentCardDataIndex] = useState<number>(0)

    const { play: playBgm, stop: stopBgm } = useAudio("/assets/audio/bgm.mp3", true, 0.5)

    const cards = initialData
    const totalCards = cards.length
    const currentCardData = cards[currentCardDataIndex]

    const startBgMusic = useCallback(() => {
        if (isBgMusicEnabled) playBgm()
    }, [isBgMusicEnabled, playBgm])

    const resetGameState = useCallback(() => {
        setCurrentCardDataIndex(0)
        setScore(0)
        setAnswers([])
        gameOverHandler.close()
    }, [gameOverHandler])

    const startGame = useCallback(() => {
        startBgMusic()
        gameStartHandler.open()
        resetGameState()
    }, [startBgMusic, gameStartHandler, resetGameState])

    const resetGame = useCallback(() => {
        gameStartHandler.close()
        resetGameState()
    }, [gameStartHandler, resetGameState])

    const playAgain = useCallback(() => {
        gameOverHandler.close()
        resetGame()
        startGame()
    }, [gameOverHandler, resetGame, startGame])

    const goToNextCard = useCallback(() => {
        setCurrentCardDataIndex((prev) => Math.min(prev + 1, totalCards - 1))
    }, [totalCards])

    const submitAnswer = useCallback(() => {
        if (answers.length >= totalCards) return
        const currentCardValue = cards[currentCardDataIndex][0]
        setAnswers((prev) => [...prev, currentCardValue])
    }, [answers.length, totalCards, currentCardDataIndex, cards])

    const skipCurrentCard = useCallback(() => {
        if (answers.length >= totalCards) return
        setAnswers((prev) => [...prev, 0])
    }, [answers.length, totalCards])

    const toggleBgMusic = useCallback(() => {
        if (isBgMusicEnabled) {
            stopBgm()
            backgroundMusicHandler.close()
        } else {
            playBgm()
            backgroundMusicHandler.open()
        }
    }, [backgroundMusicHandler, isBgMusicEnabled, playBgm, stopBgm])

    useEffect(() => {
        saveSettings(LS_KEY, { bgm: isBgMusicEnabled, sfx: isSoundEffectEnabled, language })
    }, [isBgMusicEnabled, isSoundEffectEnabled, language])

    useEffect(() => {
        if (isBgMusicEnabled) playBgm()
    }, [isBgMusicEnabled, playBgm])

    useEffect(() => {
        if (answers.length < totalCards) return
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setScore(answers.reduce((acc, val) => acc + val, 0))
        gameOverHandler.open()
    }, [answers, totalCards, gameOverHandler])

    return (
        <GameManagerContext.Provider value={{
            isGameStarted,
            isGameOver,
            isBgMusicEnabled,
            isSoundEffectEnabled,
            score,
            totalCards,
            cards,
            currentCardDataIndex,
            currentCardData,
            answers,
            language,
            startGame,
            resetGame,
            playAgain,
            goToNextCard,
            submitAnswer,
            skipcurrentCardData: skipCurrentCard,
            toggleBgMusic,
            toggleSoundEffect: soundEffectHandler.toggle,
            setLanguage,
        }}>
            {children}
        </GameManagerContext.Provider>
    )
}