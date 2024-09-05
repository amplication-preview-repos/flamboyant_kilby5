import { Ownership as TOwnership } from "../api/ownership/Ownership";

export const OWNERSHIP_TITLE_FIELD = "id";

export const OwnershipTitle = (record: TOwnership): string => {
  return record.id?.toString() || String(record.id);
};
