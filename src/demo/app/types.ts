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
    onShowConfirm: (event: any, index: number) => void;
}

export type ModalDialogProps = {
    isOpen: boolean
    index: number
    onConfirm: (event: any, index: number, isConfirm: boolean) => void;
};

export type ModalDialogState = {
    isOpen: boolean
    index: number;
};

export type UserContextType = {
    login: string;
    saveLogin: (login: string) => void;
}

export type Children = { children: React.ReactNode };

