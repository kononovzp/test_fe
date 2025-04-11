import * as React from 'react';
import { Tooltip } from '@mui/material';

import { COLORS } from '@/themes/palette';

import { icons, IconTypes } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconTypes;
  tooltip?: string;
}

export const SVGIcon = ({
  name,
  width = 24,
  height = 24,
  color = COLORS.white,
  tooltip,
  ...rest
}: IconProps): React.JSX.Element => {
  const Icon = (icons[name as keyof typeof icons] || icons.edit) as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  const iconElement = <Icon width={width} height={height} color={color} {...rest} />;

  return tooltip ? (
    <Tooltip title={tooltip} arrow disableInteractive>
      <div style={{ display: 'inline-block', width, height }}>{iconElement}</div>
    </Tooltip>
  ) : (
    iconElement
  );
};
