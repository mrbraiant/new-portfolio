import { Section } from '@components/homeSection';
import { ContactBox, ContactContent } from './styles';
import {
  Email,
  GitHub,
  LinkedIn,
  Message,
  WhatsApp,
} from '@mui/icons-material';
import { ColorPalette } from '@utils/colorPalette';
import { Text } from '@components/text';
import { StyledLink } from '@components/styledLink';

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
                backgroundColor: ColorPalette.gmail.main,
                color: ColorPalette.gmail.white,
                borderRadius: '5px',
              }}
            />

            <Text>
              <StyledLink href="mailto:mrbraiant@gmail.com">
                mrbraiant@gmail.com
              </StyledLink>
            </Text>
          </ContactBox>

          <ContactBox>
            <LinkedIn
              sx={{ color: ColorPalette.linkedIn.main }}
            />

            <StyledLink
              href={
                'https://www.linkedin.com/in/braiant-malta-924529210/'
              }
              target="_blank"
            >
              @braiant-malta
            </StyledLink>
          </ContactBox>

          <ContactBox>
            <GitHub
              sx={{
                color: '#333',
                borderRadius: '25px',
              }}
            />

            <StyledLink
              href={'https://github.com/mrbraiant'}
              target="_blank"
            >
              @mrbraiant
            </StyledLink>
          </ContactBox>

          <ContactBox>
            <WhatsApp
              sx={{
                backgroundColor:
                  ColorPalette.whatsaApp.main,
                color: ColorPalette.whatsaApp.white,
                borderRadius: '25px',
              }}
            />

            <StyledLink
              href={
                "https://wa.me/3530877753787?text=I'm%20interested%20in%20speak%20with%20you%20about%20a%20job%20offer"
              }
              target="_blank"
            >
              Text me
            </StyledLink>
          </ContactBox>
        </ContactContent>
      </div>
    </Section>
  );
};
