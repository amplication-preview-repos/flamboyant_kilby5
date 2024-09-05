import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrackingWhereInput = {
  customerId?: StringNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  review?: StringNullableFilter;
  trackingId?: StringNullableFilter;
};
