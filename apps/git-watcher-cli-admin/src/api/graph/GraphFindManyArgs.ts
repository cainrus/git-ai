import { GraphWhereInput } from "./GraphWhereInput";
import { GraphOrderByInput } from "./GraphOrderByInput";

export type GraphFindManyArgs = {
  where?: GraphWhereInput;
  orderBy?: Array<GraphOrderByInput>;
  skip?: number;
  take?: number;
};
