import axios from "axios";
import { useEffect, useState } from "react";

type Posts = {
  name: string;
  title: string;
  date: string;
};

export const usePosts = () => {
  const [postsList, setPostList] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const apigetPosts = () => {
    setLoading(true);
    return axios.get("/api/posts").then((response) => {
      setLoading(false);
      if (response.data.length === 0) {
        setIsEmpty(true);
      }
      setPostList(response.data);
    });
  };
  const getPostLists = () => {
    apigetPosts();
  };
  useEffect(() => {
    apigetPosts();
  }, []);
  return {
    postsList,
    loading,
    isEmpty,
    getPostLists,
  };
};
