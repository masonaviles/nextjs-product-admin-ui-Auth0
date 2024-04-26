export type BillingCard = {
    cardholder_name: string;
    card_number: string;
    expiry_date: string;
    security_code: string;
    card_type: string;
    billing_address: {
      street: string;
      city: string;
      state: string;
      zip_code: string;
    };
}