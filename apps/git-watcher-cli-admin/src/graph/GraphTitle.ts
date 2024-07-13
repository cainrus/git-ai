import { Graph as TGraph } from "../api/graph/Graph";

export const GRAPH_TITLE_FIELD = "fileName";

export const GraphTitle = (record: TGraph): string => {
  return record.fileName?.toString() || String(record.id);
};
