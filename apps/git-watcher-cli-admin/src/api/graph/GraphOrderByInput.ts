import { SortOrder } from "../../util/SortOrder";

export type GraphOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  dependencies?: SortOrder;
};
