import { Card } from "./components/Card"
import { profileImages } from "./data/profileImages"
import { globalStyles } from "./style/global"

globalStyles()

export function App() {

  return (
    <div className="App">
      {profileImages.map((profile) => (
        <Card 
          key={Math.floor(Date.now() * Math.random()).toString(36)}
          {...profile}
        />
      ))}
    </div>
  )
}
