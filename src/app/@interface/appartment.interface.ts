import { Tenant } from "./Tenant.interface";

export interface Appartment {
    tenant: Tenant[];
    status: string[];
    rooms: string;
    price: number;
    // documents: ?
}