import { useRouter } from 'next/router';
import { Posts } from '../../app/utils/posts';
import { Suspense } from 'react';
import { PostTemplate } from '@components/templates/post';
import { PageLoading } from '@components/pageLoading';

export default function Post() {
  const router = useRouter();
  const { query, isReady } = router;
  const { id } = query;

  const post = Posts.filter(
    (post) => post.id === Number(id),
  );
  const postContent = post[0];

  return (
    <Suspense fallback={<PageLoading pageLoading={true} />}>
      {isReady ? (
        <PostTemplate postContent={postContent} />
      ) : null}
    </Suspense>
  );
}
