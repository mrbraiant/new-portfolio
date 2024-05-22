import { Paper, styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const PaperContainer = styled(Paper)(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    backgroundColor: PalletColor.auraWhite,
    padding: '1rem',
    borderRadius: '10px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }),
);

export const LeftSideContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const RightSideContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const PaperTitle = styled(Paper)({
  width: '100%',
  padding: '0.2rem',
  borderRadius: '5px',
  // padding: '0px 0.5rem',
  zIndex: 2,
  position: 'relative',
  opacity: 0.9,
});

export const TitleBox = styled('div')({
  padding: '0px 1rem',
  background: `linear-gradient(to right, ${PalletColor.canadianLake} 0%, ${PalletColor.auraWhite} 100%)`,
});

export const ContentBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  padding: '0px 1rem',
});

export const SkillsContentBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0px 1rem',
});

export const LanguagesContentBox = styled('div')({
  display: 'flex',
  gap: '0.3rem',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const SkillsBox = styled(Paper)({
  width: 'fit-content',
  padding: '0.2rem 0.2rem 1rem',
  borderRadius: '5px',
});

export const SkillCell = styled(Paper)({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  padding: '0px 0.5rem 0px 0px',
});
