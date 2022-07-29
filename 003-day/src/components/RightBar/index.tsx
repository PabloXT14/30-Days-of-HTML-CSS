import { fakeProfiles } from '../../data/fakeProfiles';
import { FiUsers } from 'react-icons/fi';
import { 
  RightBarContainer, 
  RightBarHeader, 
  RightContent, 
  TaskBox, 
  TaskBoxBackgroundOptions, 
  TopPart 
} from "./styles";

interface TaskMembers {
  url: string;
  alternative: string; 
}

interface TaskBoxDataProps {
  id: string;
  time: string;
  name: string;
  meeting_type: TaskBoxBackgroundOptions;
  members: TaskMembers[];
}

export function RightBar() {
  const taskBoxes: TaskBoxDataProps[] = [
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '08:00 - 09:00 AM',
      name: 'Product Review',
      meeting_type: 'yellow',
      members: [
        { url: fakeProfiles.img1, alternative: 'member-1'},
        { url: fakeProfiles.img2, alternative: 'member-2'},
        { url: fakeProfiles.img3, alternative: 'member-3'},
        { url: fakeProfiles.img4, alternative: 'member-4'},
      ]
    },
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '10:00 - 11:00 AM',
      name: 'Design Meeting',
      meeting_type: 'blue',
      members: [
        { url: fakeProfiles.img5, alternative: 'member-1'},
        { url: fakeProfiles.img6, alternative: 'member-2'},
        { url: fakeProfiles.img7, alternative: 'member-3'},
      ]
    },
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '01:00 - 02:00 PM',
      name: 'Team Meeting',
      meeting_type: 'red',
      members: [
        { url: fakeProfiles.img1, alternative: 'member-1'},
        { url: fakeProfiles.img2, alternative: 'member-2'},
        { url: fakeProfiles.img3, alternative: 'member-3'},
        { url: fakeProfiles.img4, alternative: 'member-4'},
      ]
    },
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '03:00 - 04:00 PM',
      name: 'Release Event',
      meeting_type: 'green',
      members: [
        { url: fakeProfiles.img5, alternative: 'member-1'},
        { url: fakeProfiles.img6, alternative: 'member-2'},
        { url: fakeProfiles.img7, alternative: 'member-3'},
        { url: fakeProfiles.img8, alternative: 'member-4'},
        { url: fakeProfiles.img9, alternative: 'member-5'}
      ]
    },
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '08:00 - 09:00 PM',
      name: 'Release Event',
      meeting_type: 'blue',
      members: [
        { url: fakeProfiles.img5, alternative: 'member-1'},
        { url: fakeProfiles.img6, alternative: 'member-2'},
        { url: fakeProfiles.img7, alternative: 'member-3'},
        { url: fakeProfiles.img8, alternative: 'member-4'},
        { url: fakeProfiles.img9, alternative: 'member-5'}
      ]
    },
    {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      time: '11:00 - 12:00 PM',
      name: 'Practise',
      meeting_type: 'yellow',
      members: [
        { url: fakeProfiles.img1, alternative: 'member-1'},
        { url: fakeProfiles.img2, alternative: 'member-2'},
        { url: fakeProfiles.img3, alternative: 'member-3'},
        { url: fakeProfiles.img4, alternative: 'member-4'},
      ]
    }
  ]

  return (
    <RightBarContainer>
      <TopPart>
        <span className='icon'><FiUsers /></span>
        <div className="count">{taskBoxes.length}</div>
      </TopPart>

      <RightBarHeader>Schedule</RightBarHeader>

      <RightContent>
        {taskBoxes.map((task) => {
          return (
            <TaskBox key={task.id} bg_color={task.meeting_type}>
              <div className="description-task">
                <div className="time">{task.time}</div>
                <div className="task-name">{task.name}</div>
              </div>
              <div className="more-button"></div>
              <div className="members">
                {task.members.map((member) => (
                  <img 
                    key={Math.floor(Date.now() * Math.random()).toString(36)}
                    src={member.url} 
                    alt={member.alternative} 
                  />
                ))}
              </div>
            </TaskBox>
          )
        })}
      </RightContent>
    </RightBarContainer>
  )
}