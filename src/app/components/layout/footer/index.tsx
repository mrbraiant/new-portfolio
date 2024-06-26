import { ContactBox } from '@components/templates/home/sections/contactSection/styles';
import { Text } from '@components/text';
import {
  Email,
  GitHub,
  LinkedIn,
  WhatsApp,
} from '@mui/icons-material';
import { ColorPalette } from '@utils/colorPalette';
import {
  FooterBox,
  FooterTopContent,
  LogoBox,
  SocialMediaBox,
} from './styles';
import { Logo } from '../images/logo';
import { StyledLink } from '@components/styledLink';

export const Footer = () => {
  return (
    <footer>
      <FooterBox>
        <FooterTopContent>
          <div style={{ alignSelf: 'center' }}>
            <LogoBox>
              <Logo />
              <Text color={ColorPalette.auraWhite}>
                <strong>Braiant Dev ®</strong>
              </Text>
            </LogoBox>
          </div>

          <SocialMediaBox>
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
          </SocialMediaBox>
        </FooterTopContent>

        <Text
          type="caption"
          textAlign="center"
          color={ColorPalette.auraWhite}
        >
          Developed with much &#9749; and ♥
        </Text>
      </FooterBox>
    </footer>
  );
};
