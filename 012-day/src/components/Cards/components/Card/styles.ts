import styled, { css } from 'styled-components'

interface CardContainerProps {
  variants: 'shadow' | 'active'
}

export const CardContainer = styled.div<CardContainerProps>`
  background: ${(props) =>
    props.variants === 'shadow'
      ? props.theme.bg_color_2
      : props.theme.bg_color_1};
  color: ${(props) =>
    props.variants === 'shadow'
      ? props.theme.text_color_1
      : props.theme.text_color_3};
  border-radius: 0.8rem;
  font-weight: bold;

  ${(props) =>
    props.variants === 'active' &&
    css`
      display: flex;
      align-items: center;
      transform: scale(1.1);
      z-index: 1;
    `}

  ${(props) =>
    props.variants === 'shadow' &&
    css`
      box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.2);
    `}

  ul {
    margin: 1.3rem 2.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  ul li {
    list-style: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;

    &.price {
      font-size: 3rem;
      font-weight: 700;
      color: ${(props) =>
        props.variants === 'shadow'
          ? props.theme.text_color_4
          : props.theme.text_color_3};
      padding-bottom: 1rem;
    }

    .btn {
      margin-top: 1rem;
      height: 2.6rem;
      width: 13.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: ${(props) => props.theme.bg_color_1};
      color: ${(props) => props.theme.text_color_3};
      outline: none;
      border: 0;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;

      ${(props) =>
        props.variants === 'active' &&
        css`
          background: ${(props) => props.theme.bg_color_2};
          color: ${(props) => props.theme.primary_color};
        `}

      &:hover {
        transform: scale(1.1);
      }
    }

    &.bottom-bar {
      border-bottom: 2px solid ${(props) => props.theme.border_color_2};

      ${(props) =>
        props.variants === 'active' &&
        css`
          border-bottom: 2px solid ${(props) => props.theme.border_color_1};
        `}
    }

    &.pack {
      font-size: 1.1rem;
      padding-bottom: 0.4rem;
    }
  }

  @media (max-width: 280px) {
    ul {
      margin: 1rem;
    }

    & {
      transform: scale(0.8);
      margin-bottom: 1rem;
    }

    ${(props) =>
      props.variants === 'active' &&
      css`
        transform: scale(0.8);
      `}
  }

  @media (min-width: 320px) and (max-width: 414px) {
    & {
      margin-bottom: 1rem;
    }

    ${(props) =>
      props.variants === 'active' &&
      css`
        transform: scale(1);
      `}
  }

  @media (min-width: 414px) and (max-width: 768px) {
    & {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }

    ${(props) =>
      props.variants === 'active' &&
      css`
        transform: scale(1);
      `}
  }

  @media (min-width: 768px) and (max-width: 1046px) {
    & {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }

    ${(props) =>
      props.variants === 'active' &&
      css`
        transform: scale(1);
      `}
  }
`
