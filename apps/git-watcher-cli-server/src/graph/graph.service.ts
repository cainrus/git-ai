import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GraphServiceBase } from "./base/graph.service.base";

@Injectable()
export class GraphService extends GraphServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
