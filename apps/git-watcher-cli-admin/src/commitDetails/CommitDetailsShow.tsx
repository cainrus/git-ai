import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CommitDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="FileName" source="fileName" />
        <TextField label="ChangeType" source="changeType" />
        <TextField label="ChangeSummary" source="changeSummary" />
      </SimpleShowLayout>
    </Show>
  );
};
