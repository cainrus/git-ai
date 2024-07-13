import { CommitDetails as TCommitDetails } from "../api/commitDetails/CommitDetails";

export const COMMITDETAILS_TITLE_FIELD = "fileName";

export const CommitDetailsTitle = (record: TCommitDetails): string => {
  return record.fileName?.toString() || String(record.id);
};
