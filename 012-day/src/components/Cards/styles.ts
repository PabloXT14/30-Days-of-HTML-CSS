import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 280px) {
    & {
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 320px) and (max-width: 414px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 768px) and (max-width: 1046px) {
    & {
      display: flex;
    }
  }
`
