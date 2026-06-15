# My Birthday Guesser

A simple web game that tries to guess your birthday based on your answers.

This project is an evolution of my older project, [Birth Date Guesser Game](https://github.com/Deri-Kurniawan/birth-date-guesser-game), which was built using vanilla JavaScript, HTML, and CSS with minimal styling. This new version is built with React and TypeScript, featuring a brutalism design style and enhanced user experience.

## Features

- Guess your birthday (day) by answering a series of cards.
- Brutalism design style for a unique visual experience.
- Background music and sound effects for interactions and results.
- Responsive design for various screen sizes.
- Multiple language support (English, Indonesian, and Sundanese).
- Option to play again or return to the main menu after the game ends.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **Radix UI** — accessible UI primitives
- **i18next** — internationalization

## How to Play

1. Think of your birthday (day) — any date between 1 and 31.
2. For each card shown, click **"Mark This Card"** if your birthday appears on it, or **"Skip"** if it doesn't.
3. After going through all the cards, the game will reveal its guess.
4. Choose to play again or return to the main menu.

## Getting Started

> **Note:** Audio files are not included in this repository due to licensing restrictions.
> Download them manually from the links in the [Credits](#credits) section and place them in `public/assets/audio/` as:
>
> - `bgm.mp3`
> - `click.mp3`
> - `result.mp3`

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

> Audio assets are **not** covered by the MIT License — each has its own license. See [Credits](#credits) for details. and please respect the original creators' licenses when using or distributing the audio files.

## Credits

- **BGM:** Innovating Care by Aylex
  — [freetouse.com/music](https://freetouse.com/music)
- **Click SFX:**
  — [uppbeat.io](https://uppbeat.io/sfx/futuristic-ui-digital-click/167896/56451)
- **Result SFX:**
  — [uppbeat.io](https://uppbeat.io/sfx/alert-positive-digital-marimba/178987/79620)
