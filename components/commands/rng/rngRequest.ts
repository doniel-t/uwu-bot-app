import { RngCommandParams } from "../../../types/numberCommands/numberCommandTypes";
import { isNumeric } from "../../../utils/api/rng/rng";
import { notifyError, notifyLoading, notifyUpdate } from "../../../utils/libs/notify";

export function isInputValid(bound: string): boolean {
    const isFieldNotEmpty = bound != undefined && bound != '';
    const isFieldNumber = isNumeric(bound);
    return isFieldNotEmpty && isFieldNumber;
}

export async function submitRngRequest(lower: string, upper: string, setRngResponse: any) {

    const params: RngCommandParams = {
        lower: lower,
        upper: upper,
    };

    if (!isInputValid(lower) && !isInputValid(upper)) {
        notifyError('Rng!');
        return;
    }

    const toastId = notifyLoading();
    const response = await fetch('/api/rng?' + new URLSearchParams(params));
    if (response.status != 200) {
        notifyUpdate(toastId, 'error');
        return;
    }
    const data = await response.json();
    setRngResponse(data);
    notifyUpdate(toastId, 'success', data.content);
}