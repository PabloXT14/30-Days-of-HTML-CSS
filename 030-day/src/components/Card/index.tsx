import { RedditLogo, TwitterLogo, InstagramLogo } from 'phosphor-react'
import { ProfileImagesProps } from "../../data/profileImages";
import * as S from "./styles";

interface CardProps extends ProfileImagesProps {}

export function Card(props: CardProps) {
  return (
    <S.CardContainer>
      <S.CardAvatar>
        <img src={props.avatar_url} alt="" />
      </S.CardAvatar>

      <S.CardInfo>
        <h3>{props.name}</h3>
        <h5>{props.job}</h5>
        <p>{props.bio}</p>
        <S.CardSocialMedias>
          <a href={props.social_medias.reddit} target="_blank">
            <RedditLogo weight="fill" />
          </a>
          <a href={props.social_medias.twitter} target="_blank">
            <TwitterLogo weight="fill" />
          </a>
          <a href={props.social_medias.instagram} target="_blank">
            <InstagramLogo weight="fill" />
          </a>
        </S.CardSocialMedias>
      </S.CardInfo>
    </S.CardContainer>
  )
}