import styled from "styled-components";

export const LeftBarContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.bg_color};
  width: 14.375rem;
  border-right: 1px solid ${(props) => props.theme.border_color};

  @media screen and (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

export const UpperPartContent = styled.div`
  .actions {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
  }

  .circle {
    width: 0.625rem;
    height: 0.625rem;

    border-radius: 50%;
    background: ${(props) => props.theme.circle_color};
    box-shadow: 
      0.875rem 0 0 0 ${(props) => props.theme.box_shadow_1},
      1.75rem 0 0 0 ${(props) => props.theme.box_shadow_2};
  }

  .circle-2 {
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme.circle_color_2};
    box-shadow: 
      -0.375rem 0 0 0 ${(props) => props.theme.circle_color_2},
      0.375rem 0 0 0 ${(props) => props.theme.circle_color_2};
  }
`;

export const LeftContent = styled.div`
  padding: 2.5rem;

  .category-list {
    margin-top: 3.125rem;

    li {
      color: ${(props) => props.theme.secondary_color};
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.main_color};
  margin-bottom: 0.875rem;
  font-weight: 500;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: currentcolor;
    margin-right: 0.625rem;
  }
`;