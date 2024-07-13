import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommitHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CommitMessage" multiline source="commitMessage" />
        <DateTimeInput label="CommittedAt" source="committedAt" />
      </SimpleForm>
    </Create>
  );
};
