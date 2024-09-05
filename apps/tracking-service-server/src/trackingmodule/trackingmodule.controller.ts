import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TrackingModuleService } from "./trackingmodule.service";
import { UpdateTrackingStatusDto } from "../trackingModule/UpdateTrackingStatusDto";
import { CreateTrackingInputDto } from "../trackingModule/CreateTrackingInputDto";

@swagger.ApiTags("trackingModules")
@common.Controller("trackingModules")
export class TrackingModuleController {
  constructor(protected readonly service: TrackingModuleService) {}

  @common.Post("/tracking")
  @swagger.ApiOkResponse({
    type: CreateTrackingInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTrackingEntry(
    @common.Body()
    body: UpdateTrackingStatusDto
  ): Promise<CreateTrackingInputDto> {
        return this.service.CreateTrackingEntry(body);
      }

  @common.Get("/tracking/status/:trackingId")
  @swagger.ApiOkResponse({
    type: CreateTrackingInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTrackingStatus(
    @common.Body()
    body: UpdateTrackingStatusDto
  ): Promise<CreateTrackingInputDto> {
        return this.service.GetTrackingStatus(body);
      }

  @common.Patch("/tracking/review")
  @swagger.ApiOkResponse({
    type: UpdateTrackingStatusDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LeaveReview(
    @common.Body()
    body: UpdateTrackingStatusDto
  ): Promise<UpdateTrackingStatusDto> {
        return this.service.LeaveReview(body);
      }

  @common.Patch("/tracking/status")
  @swagger.ApiOkResponse({
    type: UpdateTrackingStatusDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTrackingStatus(
    @common.Body()
    body: UpdateTrackingStatusDto
  ): Promise<UpdateTrackingStatusDto> {
        return this.service.UpdateTrackingStatus(body);
      }
}
