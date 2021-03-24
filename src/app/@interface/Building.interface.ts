import { Appartment } from './appartment.interface';

export interface Building {
    id: string;
    street_number: string;
    street_name: string;
    city: string;
    appartments: Appartment[];
}

export const MOCK_BUILDING = {
    id: '',
    street_number: '',
    street_name: '',
    city: '',
    appartments: [],
}

