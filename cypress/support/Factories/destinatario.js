import { faker } from '@faker-js/faker';

export function criarDestinatario() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode()
  };
}