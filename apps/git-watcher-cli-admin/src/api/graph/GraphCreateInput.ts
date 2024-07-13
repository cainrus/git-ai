import { InputJsonValue } from "../../types";

export type GraphCreateInput = {
  fileName?: string | null;
  dependencies?: InputJsonValue;
};
