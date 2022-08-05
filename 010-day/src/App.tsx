import { PhotoGridContainer, PhotoGridItem } from "./AppStyles";
import { globalStyles } from "./styles/global"
import { randomImages } from './data/randomImages';

globalStyles();

export function App() {
  const images = Object.keys(randomImages);// retorna um array das chaves de um objeto

  return (
    <PhotoGridContainer>
      {images.map((image) => {
        return (
          <PhotoGridItem key={image}>
            <img src={randomImages[image]} alt="" />
          </PhotoGridItem>
        )
      })}
      {images.map((image) => {
        return (
          <PhotoGridItem key={image}>
            <img src={randomImages[image]} alt="" />
          </PhotoGridItem>
        )
      })}
    </PhotoGridContainer>
  )
}
