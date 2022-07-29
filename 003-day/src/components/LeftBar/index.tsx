import { IconType } from 'react-icons';
import {
  FiInbox,
  FiStar,
  FiCalendar,
  FiHash,
  FiUsers,
  FiTrash,
  FiSun,
  FiTrendingUp,
  FiZap
} from 'react-icons/fi';
import { 
  Item,
  LeftBarContainer, 
  LeftContent, 
  UpperPartContent 
} from "./styles";

interface ListIcons {
  icon: IconType;
  description: string;
}

interface LeftBarContentProps {
  actionListIcons: ListIcons [];
  categoryListIcons: ListIcons[];
}

export function LeftBar() {
  const leftBarContent: LeftBarContentProps = {
    actionListIcons: [
      {
        icon: FiInbox,
        description: 'Inbox',
      },
      {
        icon: FiStar,
        description: 'Today',
      },
      {
        icon: FiCalendar,
        description: 'Upcoming',
      },
      {
        icon: FiHash,
        description: 'Important'
      },
      {
        icon: FiUsers,
        description: 'Meetings'
      },
      {
        icon: FiTrash,
        description: 'Trash'
      }
    ],
    categoryListIcons: [
      {
        icon: FiUsers,
        description: 'Family'
      },
      {
        icon: FiSun,
        description: 'Vacation'
      },
      {
        icon: FiTrendingUp,
        description: 'Festival'
      },
      {
        icon: FiZap,
        description: 'Concerts'
      }
    ]
  }

  return (
    <LeftBarContainer>
      <UpperPartContent>
        <div className="actions">
          <div className="circle"></div>
          <div className="circle-2"></div>
        </div>
      </UpperPartContent>

      <LeftContent>
        <ul className="action-list">
          {leftBarContent.actionListIcons.map((item) => {
            return (
              <Item key={item.description}>
                <item.icon />
                <span>{item.description}</span>
              </Item>
            )
          })}
        </ul>

        <ul className="category-list">
          {leftBarContent.categoryListIcons.map((item) => {
              return (
                <Item key={item.description}>
                  <item.icon />
                  <span>{item.description}</span>
                </Item>
              )
            })}
        </ul>
      </LeftContent>
    </LeftBarContainer>
  );
}