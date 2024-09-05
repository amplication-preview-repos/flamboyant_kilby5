import { Module } from "@nestjs/common";
import { BikesetuYardModuleBase } from "./base/bikesetuYard.module.base";
import { BikesetuYardService } from "./bikesetuYard.service";
import { BikesetuYardController } from "./bikesetuYard.controller";
import { BikesetuYardResolver } from "./bikesetuYard.resolver";

@Module({
  imports: [BikesetuYardModuleBase],
  controllers: [BikesetuYardController],
  providers: [BikesetuYardService, BikesetuYardResolver],
  exports: [BikesetuYardService],
})
export class BikesetuYardModule {}
