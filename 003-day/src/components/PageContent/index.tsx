import { FiCheck } from "react-icons/fi";
import { 
  ContentCategories, 
  LabelWrapper, 
  PageContentContainer, 
  PageContentHeader, 
  Task, 
  TasksWrapper,
  UpComingHeader
} from "./styles";

interface ContentCategoriesProps {
  id: string;
  name: string;
  description: string;
}

interface TasksProps extends ContentCategoriesProps {
  state: 'Approved' | 'In Progress' | 'In Review' | 'Waiting'
}

export function PageContent() {
  const contentCategories: ContentCategoriesProps[] = [
    {
      id: 'opt-1',
      name: 'nav',
      description: 'All'
    },
    {
      id: 'opt-2',
      name: 'nav',
      description: 'Important'
    },
    {
      id: 'opt-3',
      name: 'nav',
      description: 'Notes'
    },
    {
      id: 'opt-4',
      name: 'nav',
      description: 'Links'
    }
  ]

  const todayTasks: TasksProps[] = [
    {
      id: 'item-1',
      name: 'task',
      description: 'Dashboard Design Implementation',
      state: 'Approved'
    },
    {
      id: 'item-2',
      name: 'task',
      description: 'Create a userflow',
      state: 'In Progress'
    },
    {
      id: 'item-3',
      name: 'task',
      description: 'Application Implementation',
      state: 'In Review'
    },
    {
      id: 'item-4',
      name: 'task',
      description: 'Create a Dashboard Design',
      state: 'In Progress'
    },
    {
      id: 'item-5',
      name: 'task',
      description: 'Create a Web Application Design',
      state: 'Approved'
    },
    {
      id: 'item-6',
      name: 'task',
      description: 'Interactive Design',
      state: 'In Review'
    }
  ]

  const upcomingTasks: TasksProps[] = [
    {
      id: 'item-7',
      name: 'task',
      description: 'Dashboard Design Implementation',
      state: 'Waiting'
    },
    {
      id: 'item-8',
      name: 'task',
      description: 'Create a userflow',
      state: 'Waiting'
    },
    {
      id: 'item-9',
      name: 'task',
      description: 'Application Implementation',
      state: 'Waiting'
    },
    {
      id: 'item-10',
      name: 'task',
      description: 'Create a Dashboard Design',
      state: 'Waiting'
    }
  ]


  return (
    <PageContentContainer>
      <PageContentHeader>Today Tasks</PageContentHeader>

      <ContentCategories>
        {contentCategories.map((item) => {
          return (
            <LabelWrapper key={item.id}>
              <input 
                className="nav-item" 
                type="radio" 
                name={item.name} 
                id={item.id} 
                defaultChecked={item.description === 'All'}
              />
              <label className="category" htmlFor={item.id}>{item.description}</label>
            </LabelWrapper>
          )
        })}
      </ContentCategories>

      <TasksWrapper>
        {todayTasks.map((task) => {
          return (
            <Task key={task.id}>
              <input 
                className="task-item" 
                type="checkbox" 
                name={task.name} 
                id={task.id} 
                defaultChecked={task.state === 'Approved'}
              />
              <label htmlFor={task.id}>
                <span className="label-text">
                  <FiCheck />
                  {task.description}
                </span>
              </label>
              <span className={`tag ${task.state}`}>{task.state}</span>
            </Task>
          )
        })}

        <UpComingHeader>Upcoming Tasks</UpComingHeader>
        {upcomingTasks.map((task) => {
          return (
            <Task key={task.id}>
              <input 
                className="task-item" 
                type="checkbox" 
                name={task.name} 
                id={task.id} 
                defaultChecked={task.state === 'Approved'}
              />
              <label htmlFor={task.id}>
                <span className="label-text">
                  <FiCheck />
                  {task.description}
                </span>
              </label>
              <span className={`tag ${task.state}`}>{task.state}</span>
            </Task>
          )
        })}
      </TasksWrapper>

    </PageContentContainer>
  );
}