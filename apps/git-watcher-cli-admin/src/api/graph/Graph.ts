import { JsonValue } from "type-fest";

export type Graph = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  dependencies: JsonValue;
};
