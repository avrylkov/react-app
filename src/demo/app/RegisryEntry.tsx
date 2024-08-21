import React from 'react';
import {RegistryEntryAddType} from './types';

function RegisryEntry({id, name, age, country, onShowConfirm}: RegistryEntryAddType) {

    return <tr>
        <td> {id}</td>
        <td> {name}</td>
        <td> {age}</td>
        <td> {country}</td>
        <td> <button onClick={(event) => onShowConfirm(event, id)} type="button"> - </button> </td>
    </tr>

}

export default RegisryEntry