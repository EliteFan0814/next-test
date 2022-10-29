import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import getPostFilesList from "lib/posts";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const fileData = await getPostFilesList();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(fileData));
  res.end();
};

export default handler;
