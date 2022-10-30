import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { usePosts } from "hooks/usePosts";
import getPostFilesList from "lib/posts";
import { link } from "fs";
import Link from "next/link";

type Props = {
  posts: Posts[];
};

const PostList: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <>
      <h1>文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.name}>
            <Link href={`/posts/${post.name}`}>
              <span>{post.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PostList;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostFilesList();
  return {
    props: {
      posts,
    },
  };
};
