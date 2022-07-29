import styled, { } from "styled-components";
import { FiCheck } from 'react-icons/fi';

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.5rem 1.25rem 0 1.25rem;
`;

export const PageContentHeader = styled.div`
  font-size: 1.625rem;
  color: ${(props) => props.theme.main_color};
  margin-top: 1.875rem;
`;

export const ContentCategories = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #DDD;
  padding: 1.25rem 0;
`;

export const LabelWrapper = styled.div`
  .nav-item {
    display: none;
  }
  .category {
    font-weight: 500;
    color: ${(props) => props.theme.secondary_color};
    border-bottom: 1px solid #DDD;
    padding: 1.25rem 1.875rem;
    transition: all .2s ease-in;
    cursor: pointer;
  }
  input[type="radio"]:checked + label {
    color: ${(props) => props.theme.checkbox_color};
    border-bottom: 2px solid ${(props) => props.theme.checkbox_color};
  }
`;

export const TasksWrapper = styled.div`
  padding: 1.875rem 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding-right: 0.5rem;
`;

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1.875rem;
  color: ${(props) => props.theme.task_color};
  font-size: 0.812rem;
  font-weight: 500;

  transition: all .2s ease;

  &:hover {
    transform: translateX(2px);
  }

  .task-item {
    display: none;
  }

  label {
    cursor: pointer;

    .label-text {
      position: relative;
    }

    .label-text::before {
      content: '';
      position: absolute;
      width: 0.875rem;
      height: 0.875rem;
      border: 1px solid #ddd;
      border-radius: 2px;
      left: -1.5rem;
      transition: all .2s ease;
    }

    svg {
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: -1.5rem;
      color: ${(props) => props.theme.bg_color_1};
      transition: all .2s ease;
    }
  }

  .task-item:checked + label .label-text::before {
      background-color: ${(props) => props.theme.checkbox_color};
      /* background-image: FiCheck; */
      background-repeat: no-repeat;
      background-size: 0.625rem;
      background-position: center;
      border: 1px solid ${(props) => props.theme.checkbox_color};
  }

  .tag {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 1.25rem;

    &.Approved {
      background-color: ${(props) => props.theme.tag_color_one};
      color: ${(props) => props.theme.tag_color_text_one};
    }

    &.Progress {
      background-color: ${(props) => props.theme.tag_color_two};
      color: ${(props) => props.theme.tag_color_text_two};
    }

    &.Review {
      background-color: ${(props) => props.theme.tag_color_three};
      color: ${(props) => props.theme.tag_color_text_three};
    }

    &.Waiting {
      background-color: ${(props) => props.theme.tag_color_four};
      color: ${(props) => props.theme.tag_color_text_four};
    }
  }
`;

export const UpComingHeader = styled(PageContentHeader)`
  border-bottom: 1px solid #DDD;
  padding: 1.875rem;
  margin-bottom: 1.875rem;
`;