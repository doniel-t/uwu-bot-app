// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse, UwUfyResponse } from "./uwufy/types";
import { uwufy } from "./uwufy/uwufy";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UwUfyResponse | ErrorResponse>
) {
  const inputPhrase = req.query.input;
  if (!inputPhrase) {
    res.status(400).json({ error: "invalid input in parameter!" });
    return;
  }
  res.status(200).json({ content: uwufy(inputPhrase as string) });
}
