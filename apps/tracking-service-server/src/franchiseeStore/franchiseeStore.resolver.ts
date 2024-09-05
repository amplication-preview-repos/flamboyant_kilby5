import * as graphql from "@nestjs/graphql";
import { FranchiseeStoreResolverBase } from "./base/franchiseeStore.resolver.base";
import { FranchiseeStore } from "./base/FranchiseeStore";
import { FranchiseeStoreService } from "./franchiseeStore.service";

@graphql.Resolver(() => FranchiseeStore)
export class FranchiseeStoreResolver extends FranchiseeStoreResolverBase {
  constructor(protected readonly service: FranchiseeStoreService) {
    super(service);
  }
}
