import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConfigurationWhereInput = {
  id?: StringFilter;
  minInterval?: IntNullableFilter;
  maxInterval?: IntNullableFilter;
  repoPath?: StringNullableFilter;
  prefix?: StringNullableFilter;
};
