import { GameCardProps } from "../../App";
import { GameCardContainer, GameCardCover } from "./styles";


export function GameCard(props: GameCardProps) {
  return (
    <GameCardContainer>
      <GameCardCover css={{backgroundImage: `url(${props.url})`}}/>
    </GameCardContainer>
  )
}