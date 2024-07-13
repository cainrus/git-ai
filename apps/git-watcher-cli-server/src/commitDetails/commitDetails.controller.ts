import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommitDetailsService } from "./commitDetails.service";
import { CommitDetailsControllerBase } from "./base/commitDetails.controller.base";

@swagger.ApiTags("commitDetails")
@common.Controller("commitDetails")
export class CommitDetailsController extends CommitDetailsControllerBase {
  constructor(protected readonly service: CommitDetailsService) {
    super(service);
  }
}
