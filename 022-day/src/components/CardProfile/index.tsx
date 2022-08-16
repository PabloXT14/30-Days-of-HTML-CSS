import { 
  FaTwitter, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';
import * as S from './styles';



interface CardProfileProps {
  avatar_url: string;
  name: string;
  twitter_url: string;
  instagram_url: string;
  github_url: string;
}

export function CardProfile(props: CardProfileProps) {
  return(
    <S.CardContainer>
      <img src={props.avatar_url} alt="" />
      <S.CardInfo>
        <h3>{props.name}</h3>
        <div className="icons">
          <a href={props.twitter_url} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={props.instagram_url} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={props.github_url} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </S.CardInfo>
    </S.CardContainer>
  );
}