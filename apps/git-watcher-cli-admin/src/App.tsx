import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GraphList } from "./graph/GraphList";
import { GraphCreate } from "./graph/GraphCreate";
import { GraphEdit } from "./graph/GraphEdit";
import { GraphShow } from "./graph/GraphShow";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationCreate } from "./configuration/ConfigurationCreate";
import { ConfigurationEdit } from "./configuration/ConfigurationEdit";
import { ConfigurationShow } from "./configuration/ConfigurationShow";
import { CommitHistoryList } from "./commitHistory/CommitHistoryList";
import { CommitHistoryCreate } from "./commitHistory/CommitHistoryCreate";
import { CommitHistoryEdit } from "./commitHistory/CommitHistoryEdit";
import { CommitHistoryShow } from "./commitHistory/CommitHistoryShow";
import { CommitDetailsList } from "./commitDetails/CommitDetailsList";
import { CommitDetailsCreate } from "./commitDetails/CommitDetailsCreate";
import { CommitDetailsEdit } from "./commitDetails/CommitDetailsEdit";
import { CommitDetailsShow } from "./commitDetails/CommitDetailsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GitWatcherCLI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Graph"
          list={GraphList}
          edit={GraphEdit}
          create={GraphCreate}
          show={GraphShow}
        />
        <Resource
          name="Configuration"
          list={ConfigurationList}
          edit={ConfigurationEdit}
          create={ConfigurationCreate}
          show={ConfigurationShow}
        />
        <Resource
          name="CommitHistory"
          list={CommitHistoryList}
          edit={CommitHistoryEdit}
          create={CommitHistoryCreate}
          show={CommitHistoryShow}
        />
        <Resource
          name="CommitDetails"
          list={CommitDetailsList}
          edit={CommitDetailsEdit}
          create={CommitDetailsCreate}
          show={CommitDetailsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
