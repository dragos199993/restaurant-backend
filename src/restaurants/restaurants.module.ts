import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRepository } from './restaurant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRepository])],
  providers: [RestaurantsResolver, RestaurantsService],
})
export class RestaurantsModule {}
