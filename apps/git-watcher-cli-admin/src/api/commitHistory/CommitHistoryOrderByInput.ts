import { SortOrder } from "../../util/SortOrder";

export type CommitHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  commitMessage?: SortOrder;
  committedAt?: SortOrder;
};
