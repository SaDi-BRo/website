import Head from 'next/head';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }));
}

export default function PostLayout({ params }) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">Home</Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <Component />
      </article>
    </>
  );
}
