import { SortOrder } from "../../util/SortOrder";

export type CommitDetailsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  changeType?: SortOrder;
  changeSummary?: SortOrder;
};
