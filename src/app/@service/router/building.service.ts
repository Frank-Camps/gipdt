import {Injectable} from "@angular/core";
import axios from "axios";
import { environment } from "../../../environments/environment";
import { Building } from "../../@interface/Building.interface"

const url = environment.apiUrl + "buildings/";
// const http = AxiosInterceptor(url);

@Injectable({
    providedIn: "root"
})
export class HttpBuildingsService {
    public constructor() {}
    // Put
    static async putBuildingbyId(id: string, building: any) {
        
        return axios.put(url + id, building);
    }

    // Get all
    static async getBuildings() {
        return  axios.get(url);
    }

    // // Get
    // static async getOrderById(id: string) {
    //     return http.get(url + id);
    // }


    // // Delete
    // static async deleteOrderById(id: string) {
    //     return http.delete(url + id);
    // }
}
