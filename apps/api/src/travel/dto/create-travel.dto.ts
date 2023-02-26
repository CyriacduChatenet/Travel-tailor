import { CreateTravelDTO } from '@travel-manager/types';

export class CreateTravelDto implements CreateTravelDTO {
  traveler: string;
  departureCity: string;
  destinationCity: string;
  departureDate: Date;
  returnDate: Date;
}
