import { MainContainer, Title } from "./AppStyles";
import { GameCard } from "./components/GameCard";
import { globalStyles } from "./styles/global";

export interface GameCardProps {
  url: string;
  alt: string;
}

export function App() {
  const gameCards: GameCardProps[] = [
    {
      url: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBtYXJpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      alt: 'Super Mario'
    },
    {
      url: 'https://images.unsplash.com/photo-1566577134650-bbbca4ec35f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ua2V5JTIwa29uZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      alt: 'Donkey Kong'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/pt/7/7e/God_of_War_2_capa.png',
      alt: 'God Of War II'
    },
    {
      url: 'https://static-cdn.jtvnw.net/ttv-boxart/495961_IGDB-272x380.jpg',
      alt: 'Dead Cells'
    },
  ]

  globalStyles();

  return (
    <>
      <Title>Cards Hover Effect</Title>
      <MainContainer>
      {gameCards.map((card) => {
        return (
          <GameCard {...card} />
        )
      })}
    </MainContainer>
    </>
  )
}
