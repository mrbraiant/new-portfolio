import { Button } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';
import { ReactNode } from 'react';

type CardButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const CardButton = ({
  onClick,
  children,
}: CardButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: ColorPalette.midnight,
        '&:hover': {
          backgroundColor: ColorPalette.auraWhite,
        },
      }}
    >
      <strong>{children}</strong>
    </Button>
  );
};
