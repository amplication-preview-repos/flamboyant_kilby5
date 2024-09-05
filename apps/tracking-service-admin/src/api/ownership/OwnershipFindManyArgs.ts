import { OwnershipWhereInput } from "./OwnershipWhereInput";
import { OwnershipOrderByInput } from "./OwnershipOrderByInput";

export type OwnershipFindManyArgs = {
  where?: OwnershipWhereInput;
  orderBy?: Array<OwnershipOrderByInput>;
  skip?: number;
  take?: number;
};
