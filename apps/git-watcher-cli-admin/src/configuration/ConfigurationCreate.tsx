import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ConfigurationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="minInterval" source="minInterval" />
        <NumberInput step={1} label="maxInterval" source="maxInterval" />
        <TextInput label="RepoPath" source="repoPath" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Create>
  );
};
