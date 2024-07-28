import React, {createContext, useState} from "react";
import {Props, UserContextType} from "./types";

export const CurrentUserContext = createContext<UserContextType | null>(null);

export const ContextProvider = ({children}: Props) => {
    const [login, setLogin] = useState("?");
    return (
        <CurrentUserContext.Provider value = {{login:login, saveLogin:setLogin}}>
            {children}
        </CurrentUserContext.Provider>
    );
};