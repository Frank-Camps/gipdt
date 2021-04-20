import {Injectable} from "@angular/core";
import axios from "axios";
import { environment } from "../../../environments/environment";
import { Company } from "../../@interface/company.interface";

const url = environment.apiUrl + "compagnies/";
// const http = AxiosInterceptor(url);

@Injectable({
    providedIn: "root"
})
export class HttpCompagniesService {
    public constructor() {}
    // Put
    static async putCompanyById(id: string, company: any) {
        return axios.put(url + id, company);
    }

    static async postNewCompany(company: Company) {
      return axios.post(url, company);
    }

    // Get all
    static async getCompagnies() {
        return  axios.get(url);
    }

    // Delete
    static async deleteCompanyById(id: string) {
      return axios.delete(url + id);
    }

    // // Get
    // static async getOrderById(id: string) {
    //     return http.get(url + id);
    // }


}
