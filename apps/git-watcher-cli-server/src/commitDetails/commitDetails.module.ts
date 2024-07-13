import { Module } from "@nestjs/common";
import { CommitDetailsModuleBase } from "./base/commitDetails.module.base";
import { CommitDetailsService } from "./commitDetails.service";
import { CommitDetailsController } from "./commitDetails.controller";
import { CommitDetailsResolver } from "./commitDetails.resolver";

@Module({
  imports: [CommitDetailsModuleBase],
  controllers: [CommitDetailsController],
  providers: [CommitDetailsService, CommitDetailsResolver],
  exports: [CommitDetailsService],
})
export class CommitDetailsModule {}
