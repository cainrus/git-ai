import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommitDetailsWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  changeType?: "Option1";
  changeSummary?: StringNullableFilter;
};
