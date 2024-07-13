import { CommitHistory as TCommitHistory } from "../api/commitHistory/CommitHistory";

export const COMMITHISTORY_TITLE_FIELD = "id";

export const CommitHistoryTitle = (record: TCommitHistory): string => {
  return record.id?.toString() || String(record.id);
};
