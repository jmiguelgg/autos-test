export interface Manufacturer {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: {
    IsPrimary: boolean;
    Name: string;
  }[];
}
