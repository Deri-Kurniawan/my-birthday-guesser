import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import './i18n'
import { GameManagerProvider } from './providers/GameManagerProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <GameManagerProvider>
        <App />
      </GameManagerProvider>
    </Suspense>
  </StrictMode>,
)
