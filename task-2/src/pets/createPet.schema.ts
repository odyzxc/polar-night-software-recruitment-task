import { object, string, number } from '@hapi/joi';

export const createPetSchema = object({
  id: number(),
  name: string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  age: number()
    .integer()
    .min(1)
    .max(250), // taking long living tortoises into account
});
