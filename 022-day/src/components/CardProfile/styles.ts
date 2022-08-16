import { styled } from "../../style";

export const CardContainer = styled("figure", {
  position: 'relative',
  display: 'inline-block',
  minWidth: '14.375rem',
  maxWidth: '20rem',
  width: '100%',
  color: '$title',
  textAlign: 'left',
  fontSize: '1rem',
  background: '$bg_card',
  borderRadius: '$default',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-10px)',
  },

  img: {
    height: '7rem',
    width: '35%',
    objectFit: 'cover',

    marginTop: '-1rem',
    marginLeft: '60%',
    marginBottom: '1rem',
    backfaceVisibility: 'hidden',
    verticalAlign: 'top',
    borderRadius: '$default',
    border: '2px solid $primary',
  }
});

export const CardInfo = styled("figcaption", {
  position: 'absolute',
  top: 0,
  right: '40%',
  left: 0,
  bottom: 0,
  padding: '1rem',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h3: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },

  '.icons': {
    display: 'flex',
    gap: '0.7rem',
  },

  '.icons a': {
    color: '$shape',
    fontSize: '1.5rem',

    '&:hover': {
      color: '$primary'
    }
  }
});