
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateContactInput {
    userId?: Nullable<string>;
    email?: Nullable<string>;
}

export interface UpdateContactInput {
    id: number;
    userId?: Nullable<string>;
    email?: Nullable<string>;
}

export interface Contact {
    id: number;
    userId?: Nullable<string>;
    email?: Nullable<string>;
    createdAt: string;
}

export interface IQuery {
    contacts(): Nullable<Contact>[] | Promise<Nullable<Contact>[]>;
    contact(id: number): Nullable<Contact> | Promise<Nullable<Contact>>;
}

export interface IMutation {
    createContact(createContactInput: CreateContactInput): Contact | Promise<Contact>;
    updateContact(updateContactInput: UpdateContactInput): Contact | Promise<Contact>;
    removeContact(id: number): Nullable<Contact> | Promise<Nullable<Contact>>;
}

type Nullable<T> = T | null;
