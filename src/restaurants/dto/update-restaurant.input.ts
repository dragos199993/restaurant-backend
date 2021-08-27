import { CreateRestaurantInput } from './create-restaurant.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRestaurantInput extends PartialType(CreateRestaurantInput) {
  @Field(() => String)
  id: string;
}
