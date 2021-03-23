import { Appartment } from './appartment.interface';

export interface Building {
    street_number: string;
    street_name: string;
    city: string;
    appartments: Appartment[];
}

