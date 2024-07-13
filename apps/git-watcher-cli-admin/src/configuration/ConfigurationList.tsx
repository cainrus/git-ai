import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Configurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="minInterval" source="minInterval" />
        <TextField label="maxInterval" source="maxInterval" />
        <TextField label="RepoPath" source="repoPath" />
        <TextField label="Prefix" source="prefix" />
      </Datagrid>
    </List>
  );
};
