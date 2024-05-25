import { Button } from '@mui/material';
import { PalletColor } from '@utils/palletColor';
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
        color: PalletColor.midnight,
        '&:hover': {
          backgroundColor: PalletColor.auraWhite,
        },
      }}
    >
      <strong>{children}</strong>
    </Button>
  );
};
