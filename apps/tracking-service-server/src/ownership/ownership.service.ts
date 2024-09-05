import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OwnershipServiceBase } from "./base/ownership.service.base";

@Injectable()
export class OwnershipService extends OwnershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
