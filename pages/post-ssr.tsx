import axios from "axios";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
type Props = {
  browserInfo: {
    name: string;
    major: string;
    version: string;
  };
};

const PostList: NextPage<Props> = (props) => {
  const { browserInfo } = props;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    setWidth(width);
  }, []);
  return (
    <>
      <h1>你的浏览器是：{browserInfo.name}</h1>
      <h1>你的浏览器宽度是：{width}</h1>
    </>
  );
};
export default PostList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers["user-agent"];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browserInfo: result.browser,
    },
  };
};
