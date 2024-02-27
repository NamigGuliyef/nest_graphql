import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field(() => Int)
  id: number
  @Field()
  name: string
  @Field()
  surname: string
  @Field(() => Int)
  age: number
}