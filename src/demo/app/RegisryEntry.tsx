import React from 'react';
import {RegistryEntryType} from './types';

function RegisryEntry({name, age, country}: RegistryEntryType) {

    return <tr>
        <td> {name}</td>
        <td> {age}</td>
        <td> {country}</td>
    </tr>

}

export default RegisryEntry