import { Text } from '@components/text';
import { TitleWrapper } from './styles';

type SectionTitleProps = {
  title: string;
  backgroundColor?:
    | '#00192F'
    | '#24394C'
    | '#485A6A'
    | '#6D7B88'
    | '#919CA5'
    | '#B6BDC3'
    | '#DADEE1';
};

export const SectionTitle = ({
  title,
  backgroundColor = '#00192F',
}: SectionTitleProps) => {
  return (
    <TitleWrapper sx={{ backgroundColor: backgroundColor }}>
      <Text
        type="h5"
        sx={{ color: '#DADEE1' }}
        textAlign="center"
      >
        {title}
      </Text>
    </TitleWrapper>
  );
};
