import { Module } from "@nestjs/common";
import { CommitHistoryModuleBase } from "./base/commitHistory.module.base";
import { CommitHistoryService } from "./commitHistory.service";
import { CommitHistoryController } from "./commitHistory.controller";
import { CommitHistoryResolver } from "./commitHistory.resolver";

@Module({
  imports: [CommitHistoryModuleBase],
  controllers: [CommitHistoryController],
  providers: [CommitHistoryService, CommitHistoryResolver],
  exports: [CommitHistoryService],
})
export class CommitHistoryModule {}
