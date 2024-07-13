import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommitHistoryService } from "./commitHistory.service";
import { CommitHistoryControllerBase } from "./base/commitHistory.controller.base";

@swagger.ApiTags("commitHistories")
@common.Controller("commitHistories")
export class CommitHistoryController extends CommitHistoryControllerBase {
  constructor(protected readonly service: CommitHistoryService) {
    super(service);
  }
}
