import { useGameManager } from '../hooks/useGameManager'

const CardFaceGrid = () => {
    const { currentCardData } = useGameManager()
    return (
        <div className="grid grid-cols-4 gap-2 md:gap-4">
            {currentCardData.map((number, index) => (
                <div key={index} className="size-16 bg-white border-4 border-black flex items-center justify-center text-lg font-bold">
                    {number}
                </div>
            ))}
        </div>
    )
}

export default CardFaceGrid