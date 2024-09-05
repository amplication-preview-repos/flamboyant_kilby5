import { SortOrder } from "../../util/SortOrder";

export type TrackingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryStatus?: SortOrder;
  id?: SortOrder;
  review?: SortOrder;
  trackingId?: SortOrder;
  updatedAt?: SortOrder;
};
