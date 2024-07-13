export type Configuration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  minInterval: number | null;
  maxInterval: number | null;
  repoPath: string | null;
  prefix: string | null;
};
