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
  botomIcons?: boolean;
};

export const GenerateItems = ({
  icon,
  text,
  route,
  botomIcons = false,
}: GenerateItemProps) => {
  return (
    <ListItemButton
      href={`#${route}`}
      sx={{
        '&:hover': {
          backgroundColor: botomIcons
            ? '#24394C'
            : '#485A6A',
          color: '#DADEE1',
          ['svg']: {
            color: '#DADEE1',
          },
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <Text type="subtitle2">{text}</Text>
    </ListItemButton>
  );
};
