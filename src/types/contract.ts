import { User } from "./user";

export interface Contract {
  id: number;
  user?: User;
  scope_of_work: string;
  client_name: string;
  client_address: string;
  business_type: string;
  currency: string;
  payment_frequency: string;
  start_date: string;
  end_date: string;
  user_id?: BigInt;
  terms_agree: boolean;
  price_of_services: string;
  csrfmiddlewaretoken: string;
  send_date: string;
  client_signatory_name: string;
  client_signatory_role: string;
  pdf: string;
}

