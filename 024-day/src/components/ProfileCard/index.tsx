import { IoLogoReddit, IoLogoTwitter, IoLogoVimeo } from 'react-icons/io'
import * as S from './styles';

export interface ProfileCardProps {
  name: string;
  job: string;
  bio: string;
  avatar_url: string;
  reddit_url: string;
  twitter_url: string;
  vimeo_url: string; 
}

export function ProfileCard(props: ProfileCardProps) {
  return (
    <S.ProfileCardContainer>
      <S.ProfileCardDescription>
        <h3>{props.name}</h3>
        <h4>{props.job}</h4>
        <p>{props.bio}</p>
      </S.ProfileCardDescription>

      <S.ProfileCardImage>
        <img src={props.avatar_url} alt="" />
        <S.ProfileIcons>
          <a href={props.reddit_url}><IoLogoReddit /></a>
          <a href={props.twitter_url}><IoLogoTwitter /></a>
          <a href={props.vimeo_url}><IoLogoVimeo /></a>
        </S.ProfileIcons>
      </S.ProfileCardImage>
    </S.ProfileCardContainer>
  )
}