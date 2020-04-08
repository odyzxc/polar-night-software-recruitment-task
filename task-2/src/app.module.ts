import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';

@Module({
  imports: [PetsModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class AppModule {}
