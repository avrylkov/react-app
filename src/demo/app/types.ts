import React from 'react';

export interface RegistryEntryType {
    name?: string
    age?: number
    country?: string
}

export type UserContextType = {
    login: string;
    saveLogin: (login: string) => void;
}

export type Props = { children: React.ReactNode };

export interface UserContext {
    login: string
}