export type CommitHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  commitMessage: string | null;
  committedAt: Date | null;
};
