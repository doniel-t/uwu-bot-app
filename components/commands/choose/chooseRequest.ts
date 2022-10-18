import { StringCommandParams } from "../../../types/stringCommands/stringCommandTypes";
import { notifyError, notifySucces } from "../../reusable/cmdParamField/utils";

export async function submitChooseRequest(chooseInput: string, setChooseResponse: any) {
    const params: StringCommandParams = {
        input: chooseInput,
    };

    if (!isInputValid(chooseInput)) {
        notifyError('Choose!');
        return;
    }

    const response = await fetch('/api/choose?' + new URLSearchParams(params));
    const data = await response.json();
    if (navigator) navigator.clipboard.writeText(data.content);
    setChooseResponse(data);
    notifySucces(`🥱 ${data.content}`);
}

export function isInputValid(chooseInput: string): boolean {
    return chooseInput != undefined && chooseInput != '' && chooseInput.includes(',');
}