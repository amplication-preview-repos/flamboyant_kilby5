/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Tracking as PrismaTracking } from "@prisma/client";

export class TrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TrackingCountArgs, "select">): Promise<number> {
    return this.prisma.tracking.count(args);
  }

  async trackings(
    args: Prisma.TrackingFindManyArgs
  ): Promise<PrismaTracking[]> {
    return this.prisma.tracking.findMany(args);
  }
  async tracking(
    args: Prisma.TrackingFindUniqueArgs
  ): Promise<PrismaTracking | null> {
    return this.prisma.tracking.findUnique(args);
  }
  async createTracking(
    args: Prisma.TrackingCreateArgs
  ): Promise<PrismaTracking> {
    return this.prisma.tracking.create(args);
  }
  async updateTracking(
    args: Prisma.TrackingUpdateArgs
  ): Promise<PrismaTracking> {
    return this.prisma.tracking.update(args);
  }
  async deleteTracking(
    args: Prisma.TrackingDeleteArgs
  ): Promise<PrismaTracking> {
    return this.prisma.tracking.delete(args);
  }
}