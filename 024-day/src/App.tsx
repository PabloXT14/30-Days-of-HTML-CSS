import { ProfileCard, ProfileCardProps } from "./components/ProfileCard"
import { profileImages } from "./data/profileImages"
import { globalStyles } from "./style/global"

globalStyles()

export function App() {
  const profiles: ProfileCardProps[] = [
    {
      name: "Indigo Violet",
      job: "Web Designer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet?",
      avatar_url: profileImages[0].url,
      reddit_url: "https://www.reddit.com/",
      twitter_url: "https://twitter.com/login?lang=pt",
      vimeo_url: "https://vimeo.com/pt-br/",
    },
    {
      name: "Sindy Barrow",
      job: "Web Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet?",
      avatar_url: profileImages[1].url,
      reddit_url: "https://www.reddit.com/",
      twitter_url: "https://twitter.com/login?lang=pt",
      vimeo_url: "https://vimeo.com/pt-br/",
    },
    {
      name: "Sandra Smith",
      job: "Public Relations",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet?",
      avatar_url: profileImages[2].url,
      reddit_url: "https://www.reddit.com/",
      twitter_url: "https://twitter.com/login?lang=pt",
      vimeo_url: "https://vimeo.com/pt-br/",
    }
  ]

  return (
    <div className="App">
      {profiles.map((profile) => (
        <ProfileCard
          key={Math.floor(Date.now() * Math.random()).toString(36)}
          {...profile}
        />
      ))}
    </div>
  )
}
