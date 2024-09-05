import * as graphql from "@nestjs/graphql";
import { OwnershipResolverBase } from "./base/ownership.resolver.base";
import { Ownership } from "./base/Ownership";
import { OwnershipService } from "./ownership.service";

@graphql.Resolver(() => Ownership)
export class OwnershipResolver extends OwnershipResolverBase {
  constructor(protected readonly service: OwnershipService) {
    super(service);
  }
}
