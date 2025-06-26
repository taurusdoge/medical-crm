import { faker } from "@faker-js/faker";
import { User } from "../modules/Header/types";
import { Employee, Pharmacy } from "../modules/Content/types";

// for generating the same values over and over uncomment the following line
// faker.seed(123);

export const CurrentUser: User = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  imageUrl: faker.image.avatarGitHub(),
};

export const PHARMACIES: Pharmacy[] = new Array(16).fill(0).map(() => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  location: faker.location.country(),
  employees: new Array(4).fill(0).map(
    (): Employee => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      imageUrl: faker.image.avatarGitHub(),
    })
  ),
  extraEmployees: faker.number.int({ min: 2, max: 8 }),
  reports: faker.number.int({ min: 0, max: 100 }),
}));
