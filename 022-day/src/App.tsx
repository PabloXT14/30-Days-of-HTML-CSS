import { MainContainer } from "./AppStyles";
import { CardProfile } from "./components/CardProfile";
import { profileImages } from "./data/profileImages";
import { globalStyles } from "./style/global"

globalStyles();

export function App() {

  return (
    <MainContainer>
      {profileImages.map((profile) => (
        <CardProfile 
          key={Math.floor(Date.now() * Math.random()).toString(36)}
          avatar_url={profile.url}
          name={profile.description}
          twitter_url={profile.url}
          instagram_url={profile.url}
          github_url={profile.url}
        />
      ))}
    </MainContainer>
  )
}
