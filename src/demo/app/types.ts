import React from 'react';

export interface RegistryEntryType {
    name?: string
    age?: number
    country?: string
}

export interface RegistryEntryAddType {
    id: number
    name?: string
    age?: number
    country?: string
    onClick: (event: any, index: number) => void;
}

export type UserContextType = {
    login: string;
    saveLogin: (login: string) => void;
}

export type Props = { children: React.ReactNode };

