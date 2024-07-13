import { CommitHistoryWhereInput } from "./CommitHistoryWhereInput";
import { CommitHistoryOrderByInput } from "./CommitHistoryOrderByInput";

export type CommitHistoryFindManyArgs = {
  where?: CommitHistoryWhereInput;
  orderBy?: Array<CommitHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
