import { api } from "../../api";

export interface IUser {
    name?: string
    email?: string
    password?: string
}

export interface IResponseUser {
    name: string
    email: string
    created_at: string
    updated_at: string
    id: number
}