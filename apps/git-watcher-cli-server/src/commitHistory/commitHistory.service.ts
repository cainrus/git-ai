import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommitHistoryServiceBase } from "./base/commitHistory.service.base";

@Injectable()
export class CommitHistoryService extends CommitHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
