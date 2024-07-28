import {useContext} from 'react';
import {CurrentUserContext} from './UserContext';

export function ContextInfo() {

//debugger;
    const userContext = useContext(CurrentUserContext);

    return (
        <div>login {userContext?.login}</div>
    )

}