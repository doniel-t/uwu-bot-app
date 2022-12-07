import { notifyCustomError, notifySuccess } from "../../../utils/libs/notify";
import { prominent } from 'color.js'

export default async function handleColorExtraction(url: string): Promise<string> {
    try {
        const hex = await prominent(url, { format: 'hex', amount: 3, sample: 5 })
        notifySuccess("Successfully Extracted Colors");
        return hex?.toString();
    } catch (e) {
        console.log(e);
        notifyCustomError('Please submit an Image!');
        return 'No color was found 😭'
    }
}
