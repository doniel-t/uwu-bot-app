import { toast } from "react-toastify";
import { StringCommandParams, StringInputState } from "../../types/stringCommands/stringCommandTypes";
import { notifyCopyToClipboard, notifyError, notifyLoading, notifyUpdate } from "../libs/notify";

export async function submitStringRequest(apiEndpoint: string, state: StringInputState, copyToClipboard: boolean, customIsInputValid?: (input: string) => boolean) {
    const params: StringCommandParams = {
        input: state.input,
    };

    const isValid = customIsInputValid ? customIsInputValid(state.input) : isInputValid(state.input)

    if (!isValid) {
        notifyError(`${capitalize(apiEndpoint)}!`);
        return;
    }

    const toastId = notifyLoading();
    const response = await fetch(`/api/${apiEndpoint}?` + new URLSearchParams(params));
    const data = await response.json();

    if (copyToClipboard) {
        if (navigator) {
            navigator.clipboard?.writeText(data.content);
            notifyCopyToClipboard()
        }
    }

    if (!data?.content) {
        notifyUpdate(toastId, 'error');
        return;
    }

    state.setOutput(data);
    //clears input on submit
    state.setInput('');

    notifyUpdate(toastId, 'success', data.content);
}

export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isInputValid(input: string): boolean {
    return input != undefined && input != '';
}