import {Injectable} from "@angular/core";
// import { AxiosInterceptor } from "../interceptors/axios-interceptor.service";
// import { AxiosInstance } from "axios";
import axios from "axios";
import { environment } from "../../environments/environment";

const url = environment.apiUrl + "ids/";
// const http: AxiosInstance = AxiosInterceptor(url);

@Injectable({
    providedIn: "root"
})
export class HttpIdsService {

    /*============================================= */
    /*================= IDS ================= */
    /*============================================= */
    // Get
    static async getIndexId() {
      return await axios.get(url);
    }

    // Put
    static async putIndexId(newValue: number) {
      return await axios.put(url, { value: newValue });
    }

    // /*============================================= */
    // /*================= OPTIONS ================= */
    // /*============================================= */
    // // Get Options Id
    // static async getOptionsIndexId() {
    //     return await http.get(url + "options-index");
    // }

    // // Put Options Id
    // static async putOptionsIndexId(newValue: number) {
    //     return await http.put(url + "options-index", { value: newValue });
    // }

    // /*============================================= */
    // /*================= OPTIONS LIST ================= */
    // /*============================================= */
    // // Get Options List Id
    // static async getOptionListsIndexId() {
    //     return await http.get(url + "options-lists-index");
    // }

    // // Put Options Id
    // static async putOptionListsIndexId(newValue: number) {
    //     return await http.put(url + "options-lists-index", { value: newValue });
    // }
}
