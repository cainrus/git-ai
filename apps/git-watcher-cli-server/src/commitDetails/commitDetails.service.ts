import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommitDetailsServiceBase } from "./base/commitDetails.service.base";

@Injectable()
export class CommitDetailsService extends CommitDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
