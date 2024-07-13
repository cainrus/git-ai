import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommitHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="CommitMessage" multiline source="commitMessage" />
        <DateTimeInput label="CommittedAt" source="committedAt" />
      </SimpleForm>
    </Edit>
  );
};
