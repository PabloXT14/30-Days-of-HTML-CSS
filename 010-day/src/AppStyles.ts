import { styled } from "./styles";

export const PhotoGridContainer = styled('section', {
  columnCount: 3,
  maxWidth: '65rem',
  margin: 'auto',
  padding: '1rem',
});

export const PhotoGridItem = styled('div', {
  margin: '0 auto 1rem',
  maxWidth: '20rem',
  width: '100%',

  img: {
    width: '100%',
    borderRadius: '8px',
  }
});