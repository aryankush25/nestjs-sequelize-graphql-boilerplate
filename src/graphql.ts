
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

export interface CreateNotificationAudienceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateNotificationAudienceInput {
    id: number;
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
    notificationAudience(): Nullable<NotificationAudience>[] | Promise<Nullable<NotificationAudience>[]>;
}

export interface IMutation {
    createContact(createContactInput: CreateContactInput): Contact | Promise<Contact>;
    updateContact(updateContactInput: UpdateContactInput): Contact | Promise<Contact>;
    removeContact(id: number): Nullable<Contact> | Promise<Nullable<Contact>>;
    createNotificationAudience(createNotificationAudienceInput: CreateNotificationAudienceInput): NotificationAudience | Promise<NotificationAudience>;
    updateNotificationAudience(updateNotificationAudienceInput: UpdateNotificationAudienceInput): NotificationAudience | Promise<NotificationAudience>;
    removeNotificationAudience(id: number): Nullable<NotificationAudience> | Promise<Nullable<NotificationAudience>>;
}

export interface NotificationAudience {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
