import { IconType } from "react-icons";
import { 
  FaUser,
  FaLaptop,
  FaClone,
  FaStar,
  FaTrash
} from 'react-icons/fa';

import { 
  MenuContainer, MenuHeader, MenuOption 
} from "./styles";

interface MenuOptionsProps {
  icon: IconType;
  label: string;
  url: string;
}

export function Menu() {
  const menuOptions: MenuOptionsProps[] = [
    {
      icon: FaUser,
      label: 'My drive',
      url: '#',
    },
    {
      icon: FaLaptop,
      label: 'Computers',
      url: '#',
    },
    {
      icon: FaClone,
      label: 'Share with me',
      url: '#',
    },
    {
      icon: FaStar,
      label: 'Starred',
      url: '#',
    },
    {
      icon: FaTrash,
      label: 'Trash',
      url: '#',
    }
  ]

  return (
    <MenuContainer>
      <MenuHeader>Menu</MenuHeader>
      {menuOptions.map((option) => {
        return (
          <MenuOption href={option.url}>
            <option.icon />
            {option.label}
          </MenuOption>
        )
      })}
    </MenuContainer>
  )
}