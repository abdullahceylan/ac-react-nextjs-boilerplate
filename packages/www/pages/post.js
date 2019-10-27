import { useEffect, useState } from 'react';
import Head from 'next/head';
import { fetchContentTypes, fetchEntriesForContentType } from '@utils/contentful';
import Post from '@components/Post';

function PostPage() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const contentTypes = await fetchContentTypes();
    const allPosts = contentTypes ? await fetchEntriesForContentType(contentTypes[0]) : [];
    setPosts([...allPosts]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  );
}

export default PostPage;
