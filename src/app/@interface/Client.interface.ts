export interface Client {
  lastname: string;
  firstname: string;
  email: string;
  address_street: string;
  city: string;
  zip_code: string;
  province: string;
  phone1: string;
  phone2: string;
}


export const MOCK_CLIENT: Client = {
  lastname: '',
  firstname: '',
  email: '',
  address_street: '',
  city: '',
  zip_code: '',
  province: '',
  phone1: '',
  phone2: '',
}
