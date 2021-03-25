import {Injectable} from "@angular/core";
import axios from "axios";
import { environment } from "../../../environments/environment";
import { Building } from "../../@interface/Building.interface";

const url = environment.apiUrl + "buildings/";
// const http = AxiosInterceptor(url);

@Injectable({
    providedIn: "root"
})
export class HttpBuildingsService {
    public constructor() {}
    // Put
    static async putBuildingById(id: string, building: any) {
        console.log('id', id, 'building', building);
        return axios.put(url + id, building);
    }

    static async postNewBuilding(building: Building) {
      return axios.post(url, building);
    }

    // Get all
    static async getBuildings() {
        return  axios.get(url);
    }

    // Delete
    static async deleteOrderById(id: string) {
      console.log('id in service');

      return axios.delete(url + id);
    }

    // // Get
    // static async getOrderById(id: string) {
    //     return http.get(url + id);
    // }


}
