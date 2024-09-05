import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FranchiseeStoreServiceBase } from "./base/franchiseeStore.service.base";

@Injectable()
export class FranchiseeStoreService extends FranchiseeStoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
