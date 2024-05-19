import { Text } from '@components/text';
import {
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <ListItemButton
      href={`/#${route}`}
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
      <Text type={isMobileVersion ? 'subtitle1' : 'body1'}>
        <strong>{text}</strong>
      </Text>
    </ListItemButton>
  );
};
