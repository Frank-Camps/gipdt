import { Tenant } from "./Tenant.interface";

export interface Appartment {
    civic_number: string;
    tenants: Tenant[];
    status: string[];
    rooms: string;
    price: number;
    // documents: ?
}

export const MOCK_APPARTMENT = {
    civic_number: '',
    tenants: [],
    status: '',
    rooms: '',
    price: 0,
}