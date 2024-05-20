import { Section } from '@components/homeSection';
import { ContactBox, ContactContent } from './styles';
import {
  Email,
  GitHub,
  LinkedIn,
  Message,
  WhatsApp,
} from '@mui/icons-material';
import { PalletColor } from '@utils/palletColor';
import { Text } from '@components/text';
import Link from 'next/link';

export const ContactSection = () => {
  return (
    <Section
      sectionName="Contact"
      titleBackgroundColor="#6D7B88"
      iconTitle={<Message />}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ContactContent elevation={2}>
          <ContactBox>
            <Email
              sx={{
                backgroundColor: PalletColor.gmail.main,
                color: PalletColor.gmail.white,
                borderRadius: '5px',
              }}
            />

            <Text>
              <Link href="mailto:mrbraiant@gmail.com">
                mrbraiant@gmail.com
              </Link>
            </Text>
          </ContactBox>

          <ContactBox>
            <LinkedIn
              sx={{ color: PalletColor.linkedIn.main }}
            />

            <Link
              href={
                'https://www.linkedin.com/in/braiant-malta-924529210/'
              }
              target="_blank"
            >
              @braiant-malta
            </Link>
          </ContactBox>

          <ContactBox>
            <GitHub
              sx={{
                // backgroundColor: '#333',
                color: '#333',
                borderRadius: '25px',
              }}
            />

            <Link
              href={'https://github.com/mrbraiant'}
              target="_blank"
            >
              @mrbraiant
            </Link>
          </ContactBox>

          <ContactBox>
            <WhatsApp
              sx={{
                backgroundColor: PalletColor.whatsaApp.main,
                color: PalletColor.whatsaApp.white,
                borderRadius: '25px',
              }}
            />

            <Link
              href={
                "https://wa.me/3530877753787?text=I'm%20interested%20in%20speak%20with%20you%20about%20a%20job%20offer"
              }
              target="_blank"
            >
              Text me
            </Link>
          </ContactBox>
        </ContactContent>
      </div>
    </Section>
  );
};
