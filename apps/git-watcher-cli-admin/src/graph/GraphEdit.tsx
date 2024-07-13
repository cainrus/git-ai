import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GraphEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
