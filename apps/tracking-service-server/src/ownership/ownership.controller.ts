import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OwnershipService } from "./ownership.service";
import { OwnershipControllerBase } from "./base/ownership.controller.base";

@swagger.ApiTags("ownerships")
@common.Controller("ownerships")
export class OwnershipController extends OwnershipControllerBase {
  constructor(protected readonly service: OwnershipService) {
    super(service);
  }
}
