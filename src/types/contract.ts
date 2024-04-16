import { User } from "./user";

export interface Contract {
  id: number;
  user?: User;
  agreement_date: string;
  scope_of_work: string;
  price: number;
  client_name: string;
  client_address: string;
  business_type: string;
  currency: string;
  payment_frequency: string;
  start_date: string;
  end_date: string;
  user_id?: BigInt;
}