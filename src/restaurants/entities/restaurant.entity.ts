import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Restaurant id' })
  id: string;

  @Column()
  @Field(() => String, { description: 'Restaurant name' })
  name: string;
}
