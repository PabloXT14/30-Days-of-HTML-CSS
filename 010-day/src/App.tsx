import { PhotoGridContainer, PhotoGridItem } from "./AppStyles";
import { globalStyles } from "./styles/global"
import { randomImages } from './data/randomImages';

globalStyles();

export function App() {


  return (
    <PhotoGridContainer>
      {Object.keys(randomImages).map((image) => {
        return (
          <PhotoGridItem>
            <img src={randomImages[image]} alt="" />
          </PhotoGridItem>
        )
      })}
      {Object.keys(randomImages).map((image) => {
        return (
          <PhotoGridItem>
            <img src={randomImages[image]} alt="" />
          </PhotoGridItem>
        )
      })}
    </PhotoGridContainer>
  )
}
