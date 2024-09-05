import { Module } from "@nestjs/common";
import { OwnershipModuleBase } from "./base/ownership.module.base";
import { OwnershipService } from "./ownership.service";
import { OwnershipController } from "./ownership.controller";
import { OwnershipResolver } from "./ownership.resolver";

@Module({
  imports: [OwnershipModuleBase],
  controllers: [OwnershipController],
  providers: [OwnershipService, OwnershipResolver],
  exports: [OwnershipService],
})
export class OwnershipModule {}
