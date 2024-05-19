import { BlogCard } from '@components/blog/blogCard';
import { Section } from '@components/homeSection';
import { Layout } from '@components/layout';
import { Text } from '@components/text';
import { Posts } from '@utils/posts';
import {
  Email,
  LinkedIn,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';
import { PalletColor } from '@utils/palletColor';
import { ContactBox, ContactContent } from './styles';
import { useMediaQuery, useTheme } from '@mui/material';

export const HomeTemplate = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Layout>
      <Section sectionName="About" />

      <Section
        sectionName="Experience"
        titleBackgroundColor="#24394C"
      />

      <Section
        sectionName="Projects"
        titleBackgroundColor="#485A6A"
      />

      <Section
        sectionName="Skills"
        titleBackgroundColor="#6D7B88"
      />

      <Section
        sectionName="Education"
        titleBackgroundColor="#919CA5"
      />

      <Section
        sectionName="Contact"
        titleBackgroundColor="#6D7B88"
      >
        <ContactContent>
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
      </Section>

      <Section
        sectionName="Blog"
        titleBackgroundColor="#485A6A"
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: isMobileVersion
              ? 'center'
              : undefined,
          }}
        >
          {Posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              intro={post.intro}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};
