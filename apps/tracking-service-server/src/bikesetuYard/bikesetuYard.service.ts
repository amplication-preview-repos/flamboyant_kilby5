import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BikesetuYardServiceBase } from "./base/bikesetuYard.service.base";

@Injectable()
export class BikesetuYardService extends BikesetuYardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
