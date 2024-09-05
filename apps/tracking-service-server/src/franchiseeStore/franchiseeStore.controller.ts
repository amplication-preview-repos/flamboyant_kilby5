import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FranchiseeStoreService } from "./franchiseeStore.service";
import { FranchiseeStoreControllerBase } from "./base/franchiseeStore.controller.base";

@swagger.ApiTags("franchiseeStores")
@common.Controller("franchiseeStores")
export class FranchiseeStoreController extends FranchiseeStoreControllerBase {
  constructor(protected readonly service: FranchiseeStoreService) {
    super(service);
  }
}
