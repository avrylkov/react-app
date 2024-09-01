import React, {useState} from 'react';
import {ModalDialogState, RegistryEntryType} from './types';
import RegisryEntry from './RegisryEntry';
import {ContextInfo} from "./ContextInfo"
import {useLocation, useNavigate, Location} from 'react-router-dom';
import ModalDialog from "./ModalDialog";
import Translation from "./Translation";

function Registry() {

    const location: Location<RegistryEntryType[]> = useLocation();
    const navigate = useNavigate();
    const heading = ["Name", "Age", "Сountry"];
    const [registryEntries, setRegistryEntries] = useState<RegistryEntryType[]>(location.state === null
        ? [{}] : location.state)
    const [modalDialogState, setModalDialogState] = useState<ModalDialogState>({isOpen: false, index:0});

    function handleClickDelete(event: any, index: number, isConfirm: boolean) {
        if (isConfirm) {
            registryEntries.splice(index, 1)
            let cloneRegistry = [...registryEntries]
            setRegistryEntries(cloneRegistry);
        }
        setModalDialogState({isOpen: false, index});
    }

    function openConfirmDialog(event: any, index: number) {
        //debugger
        setModalDialogState({isOpen: true, index});
    }

    return (
        <div><p></p>
            <b>Registry</b>
            <ContextInfo/>
            <p>--------</p>
            <div>
                <div/>
                <button onClick={() => {
                    navigate('add', {replace: false, state: registryEntries})
                }
                }> Добавить
                </button>
                <div/>
                <table>
                    <thead>
                    <tr>
                        {heading.map((head) => (
                            <th>{head}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {registryEntries.map((rowContent, index) => (
                        <RegisryEntry id={index}
                                      name={rowContent.name}
                                      age={rowContent.age}
                                      country={rowContent.country}
                                      onShowConfirm={openConfirmDialog}
                        ></RegisryEntry>
                    ))}
                    </tbody>
                </table>
                <ModalDialog isOpen={modalDialogState.isOpen} index={modalDialogState.index}
                             onConfirm={handleClickDelete}></ModalDialog>
                <Translation></Translation>
            </div>
        </div>
    )

}

export default Registry