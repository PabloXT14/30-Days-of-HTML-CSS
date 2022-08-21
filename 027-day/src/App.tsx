import { ImageContainer, ImageTitle } from "./AppStyles"
import { randomImages } from "./data/randomImages"
import { globalStyles } from "./style/global"

globalStyles()

export function App() {

  return (
    <div className="App">
      {randomImages.map((image) => (
        <ImageContainer key={Math.floor(Date.now() * Math.random()).toString(36)}>
          <img src={image.url} alt="" />
          <ImageTitle>
            <h3>{image.description}</h3>
          </ImageTitle>
          <a href={image.url} target="_blank"></a>
        </ImageContainer>
      ))}
    </div>
  )
}
