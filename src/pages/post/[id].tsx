import { useRouter } from 'next/router';
import { Posts } from '../utils/posts';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const post = Posts.filter(
    (post) => post.id === Number(id),
  );
  console.log('post', post);

  return (
    <>
      <h2>
        <strong>{post[0].title}</strong>
      </h2>
      <br />
      <h4>{post[0].intro}</h4>
      <br />
      <h5>{post[0].content}</h5>
    </>
  );
}
