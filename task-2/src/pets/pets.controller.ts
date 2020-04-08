import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './pet.interface';
import { CreatePetDto } from './createPet.dto';
import { JoiValidationPipe } from '../common/pipes/joiValidation.pipe';
import { createPetSchema } from './createPet.schema';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';

@Controller('pet')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  findAll(): Pet[] {
    return this.petsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', new ParseIntPipe()) id: number): Pet | undefined {
    const pet = this.petsService.findById(id);
    if (!pet) {
      throw new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }

    return pet;
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createPetSchema))
  createPet(@Body() createPetDto: CreatePetDto) {
    try {
      this.petsService.create(createPetDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  deletePet(@Param('id', new ParseIntPipe()) id: number) {
    const exists = this.petsService.delete(id);
    if (!exists) {
      throw new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }
  }
}
