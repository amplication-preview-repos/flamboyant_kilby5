import * as graphql from "@nestjs/graphql";
import { CreateTrackingInputDto } from "../trackingModule/CreateTrackingInputDto";
import { UpdateTrackingStatusDto } from "../trackingModule/UpdateTrackingStatusDto";
import { TrackingModuleService } from "./trackingmodule.service";

export class TrackingModuleResolver {
  constructor(protected readonly service: TrackingModuleService) {}

  @graphql.Mutation(() => CreateTrackingInputDto)
  async CreateTrackingEntry(
    @graphql.Args()
    args: CreateTrackingInputDto
  ): Promise<CreateTrackingInputDto> {
    return this.service.CreateTrackingEntry(args);
  }

  @graphql.Query(() => CreateTrackingInputDto)
  async GetTrackingStatus(
    @graphql.Args("args")
    args: string
  ): Promise<CreateTrackingInputDto> {
    return this.service.GetTrackingStatus(args);
  }

  @graphql.Mutation(() => UpdateTrackingStatusDto)
  async LeaveReview(
    @graphql.Args()
    args: UpdateTrackingStatusDto
  ): Promise<UpdateTrackingStatusDto> {
    return this.service.LeaveReview(args);
  }

  @graphql.Mutation(() => UpdateTrackingStatusDto)
  async UpdateTrackingStatus(
    @graphql.Args()
    args: UpdateTrackingStatusDto
  ): Promise<UpdateTrackingStatusDto> {
    return this.service.UpdateTrackingStatus(args);
  }
}
