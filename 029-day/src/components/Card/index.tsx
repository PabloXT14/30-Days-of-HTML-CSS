import { CardProps } from "../../data/cards";
import * as S from "./styles";


export function Card(props: CardProps) {
  return(
    <S.CardContainer>
      <S.CardPreview className="preview">
        <div className="content">
          <img src={props.img} alt="" />
          <h3>{props.title}</h3>
        </div>
      </S.CardPreview>
      <S.CardDescription className="description">
        <div className="content">
          <p>{props.description}</p>
          <a href={props.link} target="_blank">Read More</a>
        </div>
      </S.CardDescription>
    </S.CardContainer>
  )
}