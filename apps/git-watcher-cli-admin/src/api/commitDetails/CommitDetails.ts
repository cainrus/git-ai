export type CommitDetails = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  changeType?: "Option1" | null;
  changeSummary: string | null;
};
