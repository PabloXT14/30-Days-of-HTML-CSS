import { useContext } from 'react'
import { CardContext } from '../../App'
import { Card } from './components/Card'
import { CardsContainer } from './styles'

export function Cards() {
  const { cards } = useContext(CardContext)

  return (
    <CardsContainer>
      {cards.map((card) => {
        return (
          <Card
            key={Math.floor(Date.now() * Math.random()).toString(36)}
            {...card}
          />
        )
      })}
    </CardsContainer>
  )
}
