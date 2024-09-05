import { BikesetuYard as TBikesetuYard } from "../api/bikesetuYard/BikesetuYard";

export const BIKESETUYARD_TITLE_FIELD = "id";

export const BikesetuYardTitle = (record: TBikesetuYard): string => {
  return record.id?.toString() || String(record.id);
};
