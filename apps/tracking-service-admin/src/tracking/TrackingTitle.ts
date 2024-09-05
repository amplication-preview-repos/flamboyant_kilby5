import { Tracking as TTracking } from "../api/tracking/Tracking";

export const TRACKING_TITLE_FIELD = "customerId";

export const TrackingTitle = (record: TTracking): string => {
  return record.customerId?.toString() || String(record.id);
};
