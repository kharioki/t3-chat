import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import authOptions from "./auth/[...nextauth]";

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({
      content: "This is restricted content! You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};

export default restricted;
