import { Paper, styled } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';

export const ProjectCardPaper = styled(Paper)(
  ({ theme }) => ({
    width: '350px',
    background: `linear-gradient(${ColorPalette.sevenSeas} 0%, ${ColorPalette.auraWhite} 100%)`,
    padding: '15px',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      padding: '10px',
    },
  }),
);
