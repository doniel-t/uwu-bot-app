import { StringCommandParams } from '../../../types/stringCommands/stringCommandTypes';
import { notifyError, notifySucces } from '../../reusable/cmdParamField/utils';

export function isInputValid(uwufyInput: string): boolean {
  return uwufyInput != undefined && uwufyInput != '';
}
export async function submitUwUfyRequest(uwufyInput: string, setUwufied: any) {
  const params: StringCommandParams = {
    input: uwufyInput,
  };

  if (!isInputValid(uwufyInput)) {
    notifyError('UwUfy');
    return;
  }

  const response = await fetch('/api/uwufy?' + new URLSearchParams(params));
  const data = await response.json();
  if (navigator) navigator.clipboard.writeText(data.content);
  setUwufied(data);
  notifySucces('Copied to Clipboard!');
}
