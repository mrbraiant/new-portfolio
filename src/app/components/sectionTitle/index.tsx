import { Text } from '@components/text';
import { TitleWrapper } from './styles';
import { useMediaQuery, useTheme } from '@mui/material';
import { PalletColor } from '@utils/palletColor';
import { ReactNode } from 'react';

export type SectionTitleProps = {
  title: string;
  backgroundColor?:
    | '#00192F'
    | '#24394C'
    | '#485A6A'
    | '#6D7B88'
    | '#919CA5'
    | '#B6BDC3'
    | '#DADEE1';
  iconTitle?: ReactNode;
};

export const SectionTitle = ({
  title,
  backgroundColor = '#00192F',
  iconTitle,
}: SectionTitleProps) => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <TitleWrapper
      elevation={3}
      sx={{ backgroundColor: backgroundColor }}
    >
      {iconTitle}
      <Text
        type={isMobileVersion ? 'h5' : 'h4'}
        sx={{ color: PalletColor.auraWhite }}
        textAlign="center"
      >
        <strong>{title}</strong>
      </Text>
    </TitleWrapper>
  );
};
