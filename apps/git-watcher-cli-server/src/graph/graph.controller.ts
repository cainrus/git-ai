import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GraphService } from "./graph.service";
import { GraphControllerBase } from "./base/graph.controller.base";

@swagger.ApiTags("graphs")
@common.Controller("graphs")
export class GraphController extends GraphControllerBase {
  constructor(protected readonly service: GraphService) {
    super(service);
  }
}
