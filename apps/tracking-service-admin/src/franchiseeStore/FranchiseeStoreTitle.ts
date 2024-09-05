import { FranchiseeStore as TFranchiseeStore } from "../api/franchiseeStore/FranchiseeStore";

export const FRANCHISEESTORE_TITLE_FIELD = "id";

export const FranchiseeStoreTitle = (record: TFranchiseeStore): string => {
  return record.id?.toString() || String(record.id);
};
