import { getPost } from "lib/posts";
import { NextPage } from "next";
type Props = {
  post: Posts;
};
const postContent: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </div>
  );
};

export default postContent;
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "post1" } }],
  };
};
export const getStaticProps = async (id) => {
  const articleInfo = await getPost(id);
  return {
    props: {
      posts: {},
    },
  };
};
