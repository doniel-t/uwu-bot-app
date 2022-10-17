// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import { getCleverbotAnswer } from "../../utils/libs/cleverbot";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
    const inputPhrase = req.query.input;
    if (!inputPhrase) {
        res.status(400).json({ error: "invalid input in parameter!" });
        return;
    }
    const cleverbotAnswer = await getCleverbotAnswer(inputPhrase as string);

    res.status(200).json({ content: cleverbotAnswer });
}
