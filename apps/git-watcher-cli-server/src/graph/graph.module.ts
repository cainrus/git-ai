import { Module } from "@nestjs/common";
import { GraphModuleBase } from "./base/graph.module.base";
import { GraphService } from "./graph.service";
import { GraphController } from "./graph.controller";
import { GraphResolver } from "./graph.resolver";

@Module({
  imports: [GraphModuleBase],
  controllers: [GraphController],
  providers: [GraphService, GraphResolver],
  exports: [GraphService],
})
export class GraphModule {}
