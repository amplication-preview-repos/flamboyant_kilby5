import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BikesetuYardService } from "./bikesetuYard.service";
import { BikesetuYardControllerBase } from "./base/bikesetuYard.controller.base";

@swagger.ApiTags("bikesetuYards")
@common.Controller("bikesetuYards")
export class BikesetuYardController extends BikesetuYardControllerBase {
  constructor(protected readonly service: BikesetuYardService) {
    super(service);
  }
}
