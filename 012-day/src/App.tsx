import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Cards } from './components/Cards'
import { Header } from './components/Header'
import { GlobalStyles } from './style/global'
import { defaultTheme } from './style/themes/default'

export interface CardProps {
  type: 'active' | 'shadow'
  pack: 'Basic' | 'Professional' | 'Master'
  price: string
  description: string[]
}

interface CardContextType {
  cards: CardProps[]
  handleParseValuesToMonthly: () => void
}

export const CardContext = createContext({} as CardContextType)

export function App() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      type: 'shadow',
      pack: 'Basic',
      price: '199.99',
      description: ['500GB Storage', '2 Users Allowed', 'Send up to 3GB'],
    },
    {
      type: 'active',
      pack: 'Professional',
      price: '249.99',
      description: ['1TB Storage', '5 Users Allowed', 'Send up to 10GB'],
    },
    {
      type: 'shadow',
      pack: 'Master',
      price: '399.99',
      description: ['2TB Storage', '10 Users Allowed', 'Send up to 20GB'],
    },
  ])

  function handleParseValuesToMonthly() {
    const cardsUpdated = cards.map((card) => {
      if (card.pack === 'Basic') {
        card.price = card.price === '199.99' ? '19.99' : '199.99'
      }
      if (card.pack === 'Professional') {
        card.price = card.price === '249.99' ? '24.99' : '249.99'
      }
      if (card.pack === 'Master') {
        card.price = card.price === '399.99' ? '39.99' : '399.99'
      }

      return card
    })

    setCards(cardsUpdated)
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        handleParseValuesToMonthly,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Cards />
      </ThemeProvider>
    </CardContext.Provider>
  )
}
