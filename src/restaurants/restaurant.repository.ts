import { EntityRepository, Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async getRestaurants(): Promise<Restaurant[]> {
    const query = this.createQueryBuilder('restaurant');

    return await query.getMany();
  }

  async createRestaurant(
    createRestaurantInput: CreateRestaurantInput,
  ): Promise<Restaurant> {
    const { name } = createRestaurantInput;

    const restaurant = this.create({
      name,
    });

    return this.save(restaurant);
  }

  async getRestaurant(id: string): Promise<Restaurant> {
    const restaurant = await this.findOne(id);

    if (!restaurant) {
      throw new NotFoundException();
    }

    return restaurant;
  }
}
