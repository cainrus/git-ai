import { CommitDetailsWhereInput } from "./CommitDetailsWhereInput";
import { CommitDetailsOrderByInput } from "./CommitDetailsOrderByInput";

export type CommitDetailsFindManyArgs = {
  where?: CommitDetailsWhereInput;
  orderBy?: Array<CommitDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
