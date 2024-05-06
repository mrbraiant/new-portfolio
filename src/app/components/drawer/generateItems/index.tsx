import { Text } from '@components/text';
import {
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { ReactNode } from 'react';

type GenerateItemProps = {
  icon: ReactNode;
  text: string;
  route: string;
};

export const GenerateItems = ({
  icon,
  text,
  route,
}: GenerateItemProps) => {
  return (
    <ListItemButton
      href={`#${route}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <ListItemIcon
        sx={{
          paddingLeft: '0.3rem',
          scrollBehavior: 'smooth',
        }}
      >
        {icon}
      </ListItemIcon>
      <Text type="subtitle2">{text}</Text>
    </ListItemButton>
  );
};
