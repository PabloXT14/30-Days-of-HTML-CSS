import { styled } from './styles'

export const MainContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '2rem',
  width: '100%',
  maxWidth: '1200px',
  padding: '2rem',
  marginTop: '3rem',
  // background: 'red'
});

export const Title = styled('h1', {
  fontFamily: "'Roboto', sans-serif",
  fontSize: '3rem',
  textTransform: 'uppercase',
  color: '$background_2',
  textAlign: 'center',
  marginTop: '3rem',
})