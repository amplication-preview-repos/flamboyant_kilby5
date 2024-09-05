import { Module } from "@nestjs/common";
import { FranchiseeStoreModuleBase } from "./base/franchiseeStore.module.base";
import { FranchiseeStoreService } from "./franchiseeStore.service";
import { FranchiseeStoreController } from "./franchiseeStore.controller";
import { FranchiseeStoreResolver } from "./franchiseeStore.resolver";

@Module({
  imports: [FranchiseeStoreModuleBase],
  controllers: [FranchiseeStoreController],
  providers: [FranchiseeStoreService, FranchiseeStoreResolver],
  exports: [FranchiseeStoreService],
})
export class FranchiseeStoreModule {}
