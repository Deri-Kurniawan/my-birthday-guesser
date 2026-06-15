/**
 * This is the data for the game. Each sub-array represents a card, and contains the numbers of the faces that are present on that card.
 * @link https://github.com/Deri-Kurniawan/birth-date-guesser-game/blob/master/scripts/data.js hardcoded data in JavaScript, which is used to generate the TypeScript data below.
 */
export const data = Array.from({ length: 5 }, (_, cardIndex) =>
  Array.from({ length: 31 }, (_, n) => n + 1).filter(n => n & (1 << cardIndex))
)