import { Card } from "./components/Card"
import { cards } from "./data/cards"
import { globalStyles } from "./style/global"

globalStyles()

export function App() {

  return (
    <div className="App">
      {cards.map((card) => (
        <Card 
          key={Math.floor(Date.now() * Math.random()).toString(36)}
          {...card}
        />
      ))}
    </div>
  )
}
