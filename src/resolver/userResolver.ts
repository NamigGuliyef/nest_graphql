import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/graphql/user.model";

@Resolver()
export class UserResolver {
  
  @Query(() => User)
  getUser() {
    return {
      id: 1,
      name: "Namig",
      surname: "Guliyev",
      age: 31
    }
  }
}
