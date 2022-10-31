import { getPost, getPostIds } from "lib/posts";
import { NextPage } from "next";
type Props = {
  post: Posts;
};
const postContent: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>文章内容</h1>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </div>
  );
};

export default postContent;
export const getStaticPaths = async () => {
  const idList = await getPostIds();
  return {
    paths: idList.map((id) => ({ params: { id } })),
    fallback: false,
  };
};
export const getStaticProps = async (x: any) => {
  const articleInfo = await getPost(x.params.id);
  return {
    props: {
      post: articleInfo,
    },
  };
};
