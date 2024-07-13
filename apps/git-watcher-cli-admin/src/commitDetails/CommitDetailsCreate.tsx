import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const CommitDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <SelectInput
          source="changeType"
          label="ChangeType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="ChangeSummary" multiline source="changeSummary" />
      </SimpleForm>
    </Create>
  );
};
