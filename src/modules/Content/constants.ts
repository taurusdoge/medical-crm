import { faker } from "@faker-js/faker";
import { Pharmacy } from "./types/Pharmacy";
import { Employee } from "./types";

faker.seed(123);

export const PHARMACIES: Pharmacy[] = new Array(16).fill(0).map(() => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  location: faker.location.country(),
  employees: new Array(4).fill(0).map(
    (): Employee => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      imageUrl: faker.internet.avatar(),
    })
  ),
  reports: faker.number.int({ min: 0, max: 100 }),
}));
