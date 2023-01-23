// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import getAnswer from "../../utils/api/ask/getAnswer";
import { getRandomNumberBetween } from "../../utils/api/rng/rng";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
    const lowerBound = Number(req.query.lower);
    const upperBound = Number(req.query.upper);
    console.log(lowerBound)
    console.log(upperBound)
    if (!lowerBound && lowerBound != 0) { 
        res.status(400).json({ error: "invalid lowerBound parameter!" });
        return;
    }
    if (!upperBound && upperBound != 0) {
        res.status(400).json({ error: "invalid upperBound parameter!" });
        return;
    }
    res.status(200).json({ content: String(getRandomNumberBetween(lowerBound, upperBound)) });
}
