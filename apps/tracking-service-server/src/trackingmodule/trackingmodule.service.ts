import { Injectable } from "@nestjs/common";
import { CreateTrackingInputDto } from "../trackingModule/CreateTrackingInputDto";
import { UpdateTrackingStatusDto } from "../trackingModule/UpdateTrackingStatusDto";

@Injectable()
export class TrackingModuleService {
  constructor() {}
  async CreateTrackingEntry(args: CreateTrackingInputDto): Promise<CreateTrackingInputDto> {
    throw new Error("Not implemented");
  }
  async GetTrackingStatus(args: string): Promise<CreateTrackingInputDto> {
    throw new Error("Not implemented");
  }
  async LeaveReview(args: UpdateTrackingStatusDto): Promise<UpdateTrackingStatusDto> {
    throw new Error("Not implemented");
  }
  async UpdateTrackingStatus(args: UpdateTrackingStatusDto): Promise<UpdateTrackingStatusDto> {
    throw new Error("Not implemented");
  }
}
