import axios from "axios";
import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";

const PostList: NextPage = () => {
  const { postsList, loading, isEmpty, getPostLists } = usePosts();
  return (
    <>
      <h1>文章列表</h1>
      {loading ? (
        <div>加载中.......</div>
      ) : isEmpty ? (
        <div>列表为空</div>
      ) : (
        <ul>
          {postsList.map((item) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
      )}

      <button onClick={getPostLists}>获取列表</button>
    </>
  );
};
export default PostList;
