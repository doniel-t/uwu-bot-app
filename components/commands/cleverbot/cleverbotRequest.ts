import { StringCommandParams } from "../../../types/stringCommands/stringCommandTypes";
import { notifyError, notifySucces } from "../../reusable/cmdParamField/utils";

export function isInputValid(cleverbotInput: string): boolean {
    return cleverbotInput != undefined && cleverbotInput != '';
}

export async function submitCleverbotRequest(cleverbotInput: string, setCleverbotAnswer: any) {
    const params: StringCommandParams = {
        input: cleverbotInput
    };

    if (!isInputValid(cleverbotInput)) {
        notifyError('Chat');
        return;
    }

    const response = await fetch('/api/cleverbot?' + new URLSearchParams(params));
    const data = await response.json();
    console.log(data);
    setCleverbotAnswer(data.content);
    notifySucces(data.content);
}