import * as graphql from "@nestjs/graphql";
import { BikesetuYardResolverBase } from "./base/bikesetuYard.resolver.base";
import { BikesetuYard } from "./base/BikesetuYard";
import { BikesetuYardService } from "./bikesetuYard.service";

@graphql.Resolver(() => BikesetuYard)
export class BikesetuYardResolver extends BikesetuYardResolverBase {
  constructor(protected readonly service: BikesetuYardService) {
    super(service);
  }
}
