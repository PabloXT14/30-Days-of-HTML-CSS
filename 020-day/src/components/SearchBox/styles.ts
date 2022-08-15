import styled, { keyframes } from 'styled-components'

const slideInUp = keyframes`
  from {
    -webkit-transform: translate3d(0, 15%, 0);
    transform: translate3d(0, 15%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

export const SearchBox = styled.div`
  height: 3.75rem;
  width: 28.125rem;
  max-width: 100%;
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 3.125rem;
  background: ${(props) => props.theme.bg_search_box};
  border-radius: 10px;

  button {
    box-shadow: none;

    svg {
      display: block;
      font-size: 1.2rem;
      transition: transform 0.25s ease;
    }

    &:hover svg {
      transform: scale(1.2);
    }
  }

  input {
    &:focus {
      box-shadow: none;
    }
  }

  .btn-menu {
    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme.text_color_1};
    border: none;
    cursor: pointer;
  }

  .search {
    border: none;
    width: 100%;

    font-size: 1rem;
    font-weight: 600;
  }

  .btn-search {
    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme.text_color_1};
    border: none;
    cursor: pointer;
  }
`

export const SeachModal = styled.div`
  max-height: 25rem;
  width: 28.125rem;
  max-width: 100%;
  background: ${(props) => props.theme.bg_search_modal};
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10rem;
  animation: ${slideInUp} 0.5s;
  /* display: none; */

  .search-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.border_color_1} 17;

    h3 {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 500;
    }

    span {
      cursor: pointer;
      transition: all 0.25s ease;

      svg {
        display: block;
        font-size: 1.2rem;
        color: ${(props) => props.theme.text_color_1};
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .search-modal-body {
    padding: 1.25rem;
    height: 18rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.bg_body};
      border-radius: 0 0 10px 10px;
      box-shadow: -1px 0 5px rgba(0, 0, 0, 0.15);

      &:hover {
        background: ${(props) => props.theme.gray_500};
      }
    }

    .message {
      display: flex;
      align-items: center;
      padding: 0.625rem 1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${(props) => props.theme.bg_body} 17;
      }

      .message-avatar {
        margin-right: 1rem;
        margin-top: 0.625rem;

        img {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 30px;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.45);
        }
      }

      .message-body {
        margin-left: 0;
        margin-top: 0.5rem;

        p {
          margin-bottom: 0;
          font-size: 0.875rem;
          font-weight: 500;
          color: ${(props) => props.theme.text_color_2};
        }

        small {
          font-weight: 400;
          color: ${(props) => props.theme.text_color_3};
        }
      }
    }
  }
`
