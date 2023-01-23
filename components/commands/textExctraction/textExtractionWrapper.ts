import Tesseract from "tesseract.js";
import { notifyLoading, notifyCopyToClipboard, notifyUpdate, notifyCustomError } from "../../../utils/libs/notify";
import { Image } from 'image-js';
import { Dispatch, SetStateAction } from "react";

export default async function handleTextExtraction(url: string, copyClipboard: boolean, setDetectedText: Dispatch<SetStateAction<string>>, isMobile? :boolean) {
    try {
        const img = await Image.load(url);
        const editedImage = img
            .grey()
            .resize({ height: img.height * 2, width: img.width * 2 })
            .invert();
        const blob = await editedImage.toBlob();
        const id = notifyLoading();
        const res = await Tesseract.recognize(blob);
        if (navigator) {
            if (copyClipboard) {
                navigator.clipboard.writeText(res.data.text);
                notifyCopyToClipboard(isMobile ?? false);
            }
        }
        setDetectedText(res.data.text);
        notifyUpdate(id, 'success', res.data.text);
    } catch (e) {
        console.log(e);
        notifyCustomError('Please submit an Image!');
    }
}
