import { GraphWhereInput } from "./GraphWhereInput";

export type GraphListRelationFilter = {
  every?: GraphWhereInput;
  some?: GraphWhereInput;
  none?: GraphWhereInput;
};
