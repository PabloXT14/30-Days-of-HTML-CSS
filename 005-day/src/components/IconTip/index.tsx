import { IconType } from "react-icons";
import { IconTipContainer, Tooltip } from "./styles";
import type * as Stitches from '@stitches/react';


type IconTipVariants = Stitches.VariantProps<typeof IconTipContainer>

export interface IconTipProps {
  icon: IconType;
  iconDescription: string;
}

export function IconTip(props: IconTipProps) {
  return(
    <IconTipContainer >
      <Tooltip className="tooltip">{props.iconDescription}</Tooltip>
      <span>
        <props.icon />
      </span>
    </IconTipContainer>
  )
}