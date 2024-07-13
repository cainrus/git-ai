import { GraphWhereUniqueInput } from "./GraphWhereUniqueInput";
import { GraphUpdateInput } from "./GraphUpdateInput";

export type UpdateGraphArgs = {
  where: GraphWhereUniqueInput;
  data: GraphUpdateInput;
};
