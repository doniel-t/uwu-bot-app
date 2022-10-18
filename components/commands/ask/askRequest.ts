import { StringCommandParams } from "../../../types/stringCommands/stringCommandTypes";
import { notifyError, notifySucces } from "../../../utils/libs/notify";

export async function submitAskRequest(askInput: string, setAskResponse: any) {
    const params: StringCommandParams = {
        input: askInput,
    };

    if (!isInputValid(askInput)) {
        notifyError('Ask!');
        return;
    }

    const response = await fetch('/api/ask?' + new URLSearchParams(params));
    const data = await response.json();
    if (navigator) navigator.clipboard.writeText(data.content);
    setAskResponse(data);
    notifySucces(`🥱 ${data.content}`);
}

export function isInputValid(askInput: string): boolean {
    return askInput != undefined && askInput != '';
}