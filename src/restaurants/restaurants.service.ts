import { Injectable } from '@nestjs/common';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { RestaurantRepository } from './restaurant.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(RestaurantRepository)
    private restaurantRepository: RestaurantRepository,
  ) {}

  create(createRestaurantInput: CreateRestaurantInput) {
    return this.restaurantRepository.createRestaurant(createRestaurantInput);
  }

  findAll() {
    return this.restaurantRepository.getRestaurants();
  }

  findOne(id: string) {
    return this.restaurantRepository.getRestaurant(id);
  }

  async update(id: string, updateRestaurantInput: UpdateRestaurantInput) {
    const restaurant = await this.restaurantRepository.getRestaurant(id);
    restaurant.name = updateRestaurantInput.name;

    return await this.restaurantRepository.save(restaurant);
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
