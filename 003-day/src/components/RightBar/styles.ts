import styled from "styled-components";

/* ===== INTERFACE ===== */
const taskBoxReferedColor = {
  yellow: 'box_color',
  blue: 'box_color_2',
  red: 'box_color_3',
  green: 'box_color_4',
} as const // setando tipagem como especifica (no caso essas strings em especifico)

export type TaskBoxBackgroundOptions = keyof typeof taskBoxReferedColor;

interface TaskBoxProps {
  bg_color: TaskBoxBackgroundOptions;
}

/* ===== COMPONENTS ===== */
export const RightBarContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${(props) => props.theme.border_color};

  @media(max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

export const TopPart = styled.div`
  display: flex;
  align-items: center;
  padding: 1.875rem;
  align-self: flex-end;

  .icon {
    display: block;
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.main_color};
    margin-right: 1rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.count_color};
    color: ${(props) => props.theme.bg_color_1};
  }
`;

export const RightBarHeader = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme.main_text_color};
  margin-left: 1.875rem;
`;

export const RightContent = styled.div`
  padding: 0.875rem 2.5rem;
  overflow-y: auto;
  flex: 1;

  @media(max-width: 520px) {
    padding: 0.625rem 1rem;
  }
`;

export const TaskBox = styled.div<TaskBoxProps>`
  position: relative;
  width: 100%;
  margin: 1.25rem 0;
  padding: 1rem;

  border-radius: 12px;
  background: ${(props) => props.theme[taskBoxReferedColor[props.bg_color]]};
  box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);

  transition: all .15s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  .time {
    margin-bottom: 0.375rem;
    font-size: 0.625rem;
    opacity: 0.5;
  }

  .task-name {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.7;
  }

  .more-button {
    position: absolute;
    width: 0.25rem;
    height: 0.25rem;
    right: 1.25rem;
    top: 1.875rem;

    border-radius: 50%;
    background-color: ${(props) => props.theme.secondary_color};
    box-shadow: 
      0 -0.3rem 0 0 ${(props) => props.theme.secondary_color},
      0 0.3rem 0 0 ${(props) => props.theme.secondary_color};
    opacity: 0.4;

    cursor: pointer;
  }

  .members {
    display: flex;
    margin-top: 0.875rem;

    img {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin-right: 0.25rem;
      object-fit: cover;
    }
  }

`;