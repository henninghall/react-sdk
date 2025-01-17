import React from "react";
import { IConfigCatClient } from "configcat-common";

export interface ConfigCatContextData {
  client: IConfigCatClient;
  lastUpdated?: Date;
}

const ConfigCatContext = React.createContext<ConfigCatContextData | undefined>(
  undefined
);

ConfigCatContext.displayName = "ConfigCatContext";

export default ConfigCatContext;
