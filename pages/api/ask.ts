// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import getAnswer from "../../utils/api/ask/getAnswer";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
    const inputPhrase = req.query.input;
    if (!inputPhrase) {
        res.status(400).json({ error: "invalid input in parameter!" });
        return;
    }
    res.status(200).json({ content: getAnswer() });
}
