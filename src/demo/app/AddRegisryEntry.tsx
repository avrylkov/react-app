import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../App.css';
import { ContextInfo } from './ContextInfo';
import {RegistryEntryType} from './types';


function AddRegisryEntry() {

    const navigate = useNavigate();
    const location = useLocation();
    const [regisryEntry, setRegisryEntry] = useState<RegistryEntryType>({});

    return (
        <div>
            <ContextInfo/>
            <label htmlFor="name">Имя</label>
            <input name="name" type="text" onChange={ (eventOnChangeProp) => {
                setRegisryEntry({name: eventOnChangeProp.target.value, age : regisryEntry.age, country : regisryEntry.country})
            }}/>
            <div/>
            <label htmlFor="age">Возраст</label>
            <input name="age" type="text" onChange={ (eventOnChangeProp) => {
                setRegisryEntry({name: regisryEntry.name, age: Number.parseInt(eventOnChangeProp.target.value), country: regisryEntry.country})
            }}/>
            <div/>
            <label htmlFor="country">Страна</label>
            <input name="country" type="text"onChange={ (eventOnChangeProp) => {
                setRegisryEntry({name: regisryEntry.name, age: regisryEntry.age, country: eventOnChangeProp.target.value})
            }}/>
            <div>
                <button onClick={() => {
//debugger;
                    location.state.push(regisryEntry)
                    navigate('/registry', {replace: false, state: location.state})
                }
                }>Добавить</button>
            </div>
        </div>
    )

}

export default AddRegisryEntry