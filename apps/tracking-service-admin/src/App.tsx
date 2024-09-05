import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BikesetuYardList } from "./bikesetuYard/BikesetuYardList";
import { BikesetuYardCreate } from "./bikesetuYard/BikesetuYardCreate";
import { BikesetuYardEdit } from "./bikesetuYard/BikesetuYardEdit";
import { BikesetuYardShow } from "./bikesetuYard/BikesetuYardShow";
import { FranchiseeStoreList } from "./franchiseeStore/FranchiseeStoreList";
import { FranchiseeStoreCreate } from "./franchiseeStore/FranchiseeStoreCreate";
import { FranchiseeStoreEdit } from "./franchiseeStore/FranchiseeStoreEdit";
import { FranchiseeStoreShow } from "./franchiseeStore/FranchiseeStoreShow";
import { OwnershipList } from "./ownership/OwnershipList";
import { OwnershipCreate } from "./ownership/OwnershipCreate";
import { OwnershipEdit } from "./ownership/OwnershipEdit";
import { OwnershipShow } from "./ownership/OwnershipShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { TrackingList } from "./tracking/TrackingList";
import { TrackingCreate } from "./tracking/TrackingCreate";
import { TrackingEdit } from "./tracking/TrackingEdit";
import { TrackingShow } from "./tracking/TrackingShow";
import { ManufacturerList } from "./manufacturer/ManufacturerList";
import { ManufacturerCreate } from "./manufacturer/ManufacturerCreate";
import { ManufacturerEdit } from "./manufacturer/ManufacturerEdit";
import { ManufacturerShow } from "./manufacturer/ManufacturerShow";
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
        title={"TrackingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BikesetuYard"
          list={BikesetuYardList}
          edit={BikesetuYardEdit}
          create={BikesetuYardCreate}
          show={BikesetuYardShow}
        />
        <Resource
          name="FranchiseeStore"
          list={FranchiseeStoreList}
          edit={FranchiseeStoreEdit}
          create={FranchiseeStoreCreate}
          show={FranchiseeStoreShow}
        />
        <Resource
          name="Ownership"
          list={OwnershipList}
          edit={OwnershipEdit}
          create={OwnershipCreate}
          show={OwnershipShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Tracking"
          list={TrackingList}
          edit={TrackingEdit}
          create={TrackingCreate}
          show={TrackingShow}
        />
        <Resource
          name="Manufacturer"
          list={ManufacturerList}
          edit={ManufacturerEdit}
          create={ManufacturerCreate}
          show={ManufacturerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
