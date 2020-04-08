import { Injectable } from '@nestjs/common';
import { Pet } from './pet.interface';

const initialPetsData = [
  {
    id: 1,
    name: 'Tom',
    age: 32,
  },
  {
    id: 2,
    name: 'Jerry',
    age: 25,
  },
  {
    id: 3,
    name: 'Sonic',
    age: 18,
  },
];

@Injectable()
export class PetsService {
  private pets: Pet[] = initialPetsData;

  create(pet: Pet) {
    if (this.pets.find(p => pet.id === p.id)) {
      throw new Error(`Id ${pet.id} already exists`);
    }
    this.pets.push(pet);
    return pet;
  }

  findAll(): Pet[] {
    return this.pets;
  }

  delete(id: number): boolean {
    const exists = !!this.pets.find(p => id === p.id);
    this.pets = this.pets.filter(p => p.id !== id);
    return exists;
  }

  findById(id: number): Pet {
    return this.pets.find(p => p.id === id);
  }
}
