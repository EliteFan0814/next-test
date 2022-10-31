import path from "path";
import fs, { promises as fsPromise } from "fs";
import matter from "gray-matter";
import { marked } from "marked";

const getPostFilesList = async () => {
  const markdownDir = path.join(process.cwd(), "markdown");
  const filesNames = await fsPromise.readdir(markdownDir);
  const posts = filesNames.map((fileName) => {
    const fullPath = path.join(markdownDir, fileName);
    const name = fileName.replace(/\.md$/g, "");
    const text = fs.readFileSync(fullPath, "utf-8");
    const {
      data: { title, date },
      content,
    } = matter(text);
    return {
      name,
      title,
      date,
    };
  });
  return JSON.parse(JSON.stringify(posts));
};

export default getPostFilesList;

export const getPost = async (id: string) => {
  const markdownDir = path.join(process.cwd(), "markdown");
  const nowPostArticle = path.join(markdownDir, `${id}.md`);
  const articleContent = fs.readFileSync(nowPostArticle, "utf-8");
  const {
    data: { title, date },
    content,
  } = matter(articleContent);
  const htmlContent = marked(content);
  return JSON.parse(
    JSON.stringify({
      title,
      date,
      content: htmlContent,
    })
  );
};

export const getPostIds = async () => {
  const markdownDir = path.join(process.cwd(), "markdown");
  const filesNames = await fsPromise.readdir(markdownDir);
  return filesNames.map((fileName) => fileName.replace(/\.md$/g, ""));
};
