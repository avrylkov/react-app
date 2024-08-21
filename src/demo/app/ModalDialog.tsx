import {useEffect, useRef, useState} from 'react';
import {ModalDialogProps, ModalDialogState} from "./types";

export default function ModalDialog({isOpen, index, onConfirm}: ModalDialogProps) {

    //debugger;
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        //debugger
        const dialog = ref.current;
        if (!isOpen) {
            dialog?.close();
            return;
        }
        dialog?.showModal();
        // return () => {
        //     dialog?.close();
        // };
    }, [isOpen]);

    return (
        <div>
            <dialog ref={ref}>
                <h1>Предупреждение</h1>
                <button onClick={(event) => (onConfirm(event, index, true))}>Удалить N {index}?</button>
                <button onClick={event => (onConfirm(event, index, false))}>Нет</button>
            </dialog>
        </div>)

}