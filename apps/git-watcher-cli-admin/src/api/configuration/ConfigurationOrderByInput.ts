import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  minInterval?: SortOrder;
  maxInterval?: SortOrder;
  repoPath?: SortOrder;
  prefix?: SortOrder;
};
