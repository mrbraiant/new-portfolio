import { useRouter } from 'next/router';
import { Posts } from '../utils/posts';
import Image from 'next/image';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const post = Posts.filter(
    (post) => post.id === Number(id),
  );
  const postContent = post[0];

  console.log('post', post);

  return (
    <>
      {postContent.image && (
        <Image
          alt={`post-image-${postContent.title}`}
          src={postContent.image}
          width={800}
          height={400}
        />
      )}
      <h2>
        <strong>{postContent.title}</strong>
      </h2>
      <br />
      <h4>{postContent.intro}</h4>
      <br />
      <h5>{postContent.content}</h5>
    </>
  );
}
