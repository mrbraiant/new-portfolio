import { StyledLink } from '@components/styledLink';
import { Text } from '@components/text';
import {
  CalendarMonth,
  Code,
  LocationCity,
  LogoDev,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import {
  EducationCardPaper,
  EducationLineBox,
} from './styles';

export const EducationCard = () => {
  return (
    <EducationCardPaper elevation={2}>
      <Divider />
      <EducationLineBox>
        <Code />
        <Text type="h5">
          <strong>Systems Analysis and Development</strong>
        </Text>
      </EducationLineBox>
      <Divider />

      <EducationLineBox>
        <LogoDev />
        <Text>
          <strong>Technologist</strong>
        </Text>
      </EducationLineBox>
      <Divider />

      <EducationLineBox>
        <LocationCity />
        <Text>
          South of Minas University -{' '}
          <StyledLink
            href={
              'https://portal.unis.edu.br/analise-e-desenvolvimento-de-sistemas'
            }
            target="_blank"
          >
            UNIS - MG - Brazil
          </StyledLink>
        </Text>
      </EducationLineBox>
      <Divider />

      <EducationLineBox>
        <CalendarMonth />
        <Text>
          Graduated in <strong>June 2021</strong>
        </Text>
      </EducationLineBox>
      <Divider />
    </EducationCardPaper>
  );
};
