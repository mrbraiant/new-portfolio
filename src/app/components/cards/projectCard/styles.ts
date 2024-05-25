import { Paper, styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const ProjectCardPaper = styled(Paper)(
  ({ theme }) => ({
    width: '350px',
    background: `linear-gradient(${PalletColor.sevenSeas} 0%, ${PalletColor.auraWhite} 100%)`,
    padding: '15px',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      padding: '10px',
    },
  }),
);
