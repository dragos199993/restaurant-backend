import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field(() => String, { description: 'Restaurant name' })
  name: string;
}
