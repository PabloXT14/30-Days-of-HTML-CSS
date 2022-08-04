import { styled } from "./styles";

export const PhotoGridContainer = styled('section', {
  columnCount: 5,
  columnWidth: '18.75rem',
});

export const PhotoGridItem = styled('div', {
  margin: '0 auto 1rem',
  maxWidth: '25rem',
  width: '100%',

  img: {
    width: '100%',
  }
});