import { Text } from '@components/text';
import { Paper } from '@mui/material';
import { PalletColor } from '@utils/palletColor';
import Image from 'next/image';

type ExperienceCardProps = {
  title: string;
  titleLogo: string;
  cardImage: string;
  jobTitle: string;
  jobType: string;
  jobDescription: string;
};

export const ExperienceCard = ({
  title,
  titleLogo,
  cardImage,
  jobTitle,
  jobType,
  jobDescription,
}: ExperienceCardProps) => {
  return (
    <Paper
      elevation={8}
      sx={{
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // padding: '1rem',
        width: '350px',
        // height: '434px',
        border: '15px solid #00192F',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0px 0.5rem',
            backgroundColor: PalletColor.auraWhite,
            border: 'thick double darkblue',
          }}
        >
          <Text>
            <strong>{title}</strong>
          </Text>
          <Image
            alt="exp-logo-1"
            src={titleLogo}
            width={40}
            height={40}
          />
          {/* <LogoDev /> */}
        </div>
        <Image
          alt="avatar"
          src={cardImage}
          width={310}
          height={300}
          style={{
            objectFit: 'cover',
            width: '320px',
            height: '150px',
            border: 'thick double darkblue',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0px 0.5rem',
            backgroundColor: PalletColor.auraWhite,
            border: 'thick double darkblue',
          }}
        >
          <Text>
            <strong>{jobTitle}</strong>
          </Text>
          <div
            style={{
              backgroundColor: PalletColor.darkMidnight,
              color: PalletColor.auraWhite,
              borderRadius: '15px',
              padding: '0px 0.5rem',
            }}
          >
            <Text type="body2">
              <strong>{jobType}</strong>
            </Text>
          </div>
          {/* <Code /> */}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            width: '100%',
            padding: '0px 0.5rem',
            backgroundColor: '#fafafa',
            border: 'thick double darkblue',
          }}
        >
          <Text type="body2">{jobDescription}</Text>

          <Text
            type="body2"
            style={{
              backgroundColor: 'orange',
              borderRadius: '15px',
              padding: '0px 0.5rem',
              width: 'fit-content',
              alignSelf: 'self-end',
              marginTop: '-20px',
              marginBottom: '0.5rem',
            }}
          >
            <strong>2years+</strong>
          </Text>
        </div>
      </div>
    </Paper>
  );
};
