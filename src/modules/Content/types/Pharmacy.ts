import { Employee } from ".";

export type Pharmacy = {
  id: string;
  name: string;
  location: string;
  employees: Employee[];
  reports: number;
};
