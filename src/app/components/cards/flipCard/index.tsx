import { ReactNode } from 'react';
import {
  BackCard,
  Card,
  CardContainer,
  FrontCard,
} from './styles';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

type FlipCardProps = {
  frontContent: ReactNode;
  backContent?: ReactNode;
  showBackImage?: boolean;
};

export const FlipCard = ({
  frontContent,
  backContent,
  showBackImage = true,
}: FlipCardProps) => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <div
      style={{
        width: 'fit-content',
      }}
    >
      <CardContainer>
        <Card>
          <FrontCard>{frontContent}</FrontCard>
          <BackCard>
            {showBackImage ? (
              <Image
                alt="back-card-image"
                src={'/images/b-back-card.png'}
                width={350}
                height={415}
                style={{
                  borderRadius: '20px',
                  width: isMobileVersion
                    ? '250px'
                    : '350px',
                }}
              />
            ) : (
              backContent
            )}
          </BackCard>
        </Card>
      </CardContainer>
    </div>
  );
};
