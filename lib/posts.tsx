import path from "path";
import fs, { promises as fsPromise } from "fs";
import matter from "gray-matter";
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
  return posts;
};

export default getPostFilesList;
