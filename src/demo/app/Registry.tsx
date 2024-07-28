import React, {useState} from 'react';
import {RegistryEntryType} from './types';
import RegisryEntry from './RegisryEntry';
import {ContextInfo} from "./ContextInfo"
import {useLocation, useNavigate} from 'react-router-dom';

function Registry() {

    const location = useLocation();
    const navigate = useNavigate();
    const heading = ["Name", "Age", "Сountry"];
    const [regisryEntries, setRegisryEntries] = useState<RegistryEntryType[]>(location.state === null
        ? [{}] : location.state)

    return (
        <div> Regisry
            <div>
                <ContextInfo/>
                <div/>
                <button onClick={() => {
                    navigate('add', {replace: false, state: regisryEntries})
                }
                }> Добавить </button>
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
                    {regisryEntries.map((rowContent) => (
                        <RegisryEntry name={rowContent.name} age={rowContent.age}
                                      country={rowContent.country}></RegisryEntry>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Registry