import { Id, toast, TypeOptions } from "react-toastify";

export function notifyError(fieldName: string) {
    toast.error(`Please fill out the ${fieldName} field!`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}


export function notifyCopyToClipboard() {
    toast.success(`Copied to Clipboard`, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

export function notifyLoading(): Id {
    return toast.loading('Im thinking...', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    })
}

export function notifyUpdate(toastId: Id, type: TypeOptions, content?: string) {
    const parsedContent = content ? `🥱${content}` : 'Oops something went wrong ☠️'
    toast.update(toastId, {
        render: parsedContent,
        type: type,
        isLoading: false,
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    })
}