import { ImageContainer, ImageInfo } from "./AppStyles"
import { globalStyles } from "./style/global"

globalStyles()

const IMAGE_LINK = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

export function App() {

  return (
    <div className="App">
      <ImageContainer>
        <img src={IMAGE_LINK} alt="" />
        <ImageInfo>
          <h3>Ingredia <span>Nutrisha</span></h3>
        </ImageInfo>
        <a href={IMAGE_LINK} target="_blank"></a>
      </ImageContainer>
    </div>
  )
}
