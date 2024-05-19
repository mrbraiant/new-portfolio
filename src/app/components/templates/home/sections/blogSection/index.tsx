import { BlogCard } from '@components/blog/blogCard';
import { Section } from '@components/homeSection';
import { useMediaQuery, useTheme } from '@mui/material';
import { Posts } from '@utils/posts';

export const BlogSection = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );
  return (
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
  );
};
