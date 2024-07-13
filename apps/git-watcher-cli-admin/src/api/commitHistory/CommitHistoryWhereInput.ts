import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommitHistoryWhereInput = {
  id?: StringFilter;
  commitMessage?: StringNullableFilter;
  committedAt?: DateTimeNullableFilter;
};
