import * as graphql from "@nestjs/graphql";
import { GraphResolverBase } from "./base/graph.resolver.base";
import { Graph } from "./base/Graph";
import { GraphService } from "./graph.service";

@graphql.Resolver(() => Graph)
export class GraphResolver extends GraphResolverBase {
  constructor(protected readonly service: GraphService) {
    super(service);
  }
}
