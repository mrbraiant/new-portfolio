import { Text } from '@components/text';
import { TitleWrapper } from './styles';
import { useMediaQuery, useTheme } from '@mui/material';

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
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <TitleWrapper
      elevation={3}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Text
        type={isMobileVersion ? 'h5' : 'h4'}
        sx={{ color: '#DADEE1' }}
        textAlign="center"
      >
        <strong>{title}</strong>
      </Text>
    </TitleWrapper>
  );
};

// BAR WITH IMAGE
// import { Text } from '@components/text';
// import { TitleWrapper } from './styles';
// import Image from 'next/image';

// type SectionTitleProps = {
//   title: string;
//   backgroundColor?:
//     | '#00192F'
//     | '#24394C'
//     | '#485A6A'
//     | '#6D7B88'
//     | '#919CA5'
//     | '#B6BDC3'
//     | '#DADEE1';
// };

// export const SectionTitle = ({
//   title,
//   backgroundColor = '#00192F',
// }: SectionTitleProps) => {
//   return (
//     <TitleWrapper sx={{ backgroundColor: backgroundColor }}>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           width: '50%',
//         }}
//       >
//         <Text
//           type="h5"
//           sx={{ color: '#DADEE1' }}
//           textAlign="center"
//         >
//           {title}
//         </Text>
//       </div>
//       <Image
//         alt={`title-image-${title}`}
//         src={`/images/about-me.png`}
//         width={500}
//         height={80}
//         style={{
//           width: '50%',
//           height: '80px',
//           objectFit: 'cover',
//         }}
//       />
//     </TitleWrapper>
//   );
// };
