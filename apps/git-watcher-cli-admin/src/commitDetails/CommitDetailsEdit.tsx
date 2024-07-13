import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const CommitDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
