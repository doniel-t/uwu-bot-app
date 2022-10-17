// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import uwufy from "../../utils/api/uwufy/uwufy";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
  const inputPhrase = req.query.input;
  if (!inputPhrase) {
    res.status(400).json({ error: "invalid input in parameter!" });
    return;
  }
  res.status(200).json({ content: uwufy(inputPhrase as string) });
}
