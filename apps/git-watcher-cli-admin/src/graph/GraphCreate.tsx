import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GraphCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
