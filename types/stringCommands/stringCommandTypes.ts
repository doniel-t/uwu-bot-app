import { Dispatch, SetStateAction } from "react";

export type StringCommandParams = {
    input: string;
}

export type StringInputErrorResponse = {
    error: string;
}

export type StringResponse = {
    content: string;
}

export type StringInputState = {
    input: string;
    setInput: Dispatch<SetStateAction<string | undefined>>;
    output: StringResponse;
    setOutput: Dispatch<SetStateAction<StringResponse | undefined>>
};