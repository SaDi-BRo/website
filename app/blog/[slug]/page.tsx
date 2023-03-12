import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  if (!post) {
    return;
  }

  const { title } = post;

  return {
    title,
  };
}

const PostLayout = ({ params }) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  const Component = useMDXComponent(post!.body.code);

  return (
    <>
      <section>
        <h1 className="font-bold text-3xl font-serif max-w-[650px]">
          {post.title}
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {post!.date}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        </div>
        <Component />
      </section>
    </>
  );
};

export default PostLayout;
