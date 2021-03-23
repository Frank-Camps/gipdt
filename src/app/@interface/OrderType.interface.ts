import { typeData } from "../@core/data/orderType";

export interface OrderType {
  type: string[];
}

export const MOCK_ORDERTYPE: OrderType = {
  type: typeData,
}

