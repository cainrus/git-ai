import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GraphWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  dependencies?: JsonFilter;
};
