import React, {useState} from 'react';
import {RegistryEntryType} from './types';
import RegisryEntry from './RegisryEntry';
import {ContextInfo} from "./ContextInfo"
import {useLocation, useNavigate, Location} from 'react-router-dom';

function Registry() {

    const location: Location<RegistryEntryType[]> = useLocation();
    const navigate = useNavigate();
    const heading = ["Name", "Age", "Сountry"];
    const [regisryEntries, setRegistryEntries] = useState<RegistryEntryType[]>(location.state === null
        ? [{}] : location.state)

    function handleClickDelete(event: any, index: number) {
        regisryEntries.splice(index, 1)
        setRegistryEntries(regisryEntries.map(a => ({...a})));
    }

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
                    {regisryEntries.map((rowContent, index) => (
                        <RegisryEntry id={index}
                                      name={rowContent.name}
                                      age={rowContent.age}
                                      country={rowContent.country}
                                      onClick={handleClickDelete}
                        ></RegisryEntry>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Registry