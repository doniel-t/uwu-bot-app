// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import parseInput from "../../utils/api/choose/parseInput";
import getAnswer from "../../utils/api/choose/getAnswer";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
    const inputPhrase = req.query.input;
    const parsedInput = parseInput(inputPhrase as string)
    if (!inputPhrase) {
        res.status(400).json({ error: "invalid input in parameter!" });
        return;
    }
    res.status(200).json({ content: getAnswer(parsedInput) });
}
