import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "repoPath";

export const ConfigurationTitle = (record: TConfiguration): string => {
  return record.repoPath?.toString() || String(record.id);
};
