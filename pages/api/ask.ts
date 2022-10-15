// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getAnswer from "./ask/getRandomAnswer";
import { AskResponse, ErrorResponse } from "./ask/types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AskResponse | ErrorResponse>
) {
    const inputPhrase = req.query.input;
    if (!inputPhrase) {
        res.status(400).json({ error: "invalid input in parameter!" });
        return;
    }
    res.status(200).json({ content: getAnswer() });
}
