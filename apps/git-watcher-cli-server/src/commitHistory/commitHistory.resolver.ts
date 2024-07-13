import * as graphql from "@nestjs/graphql";
import { CommitHistoryResolverBase } from "./base/commitHistory.resolver.base";
import { CommitHistory } from "./base/CommitHistory";
import { CommitHistoryService } from "./commitHistory.service";

@graphql.Resolver(() => CommitHistory)
export class CommitHistoryResolver extends CommitHistoryResolverBase {
  constructor(protected readonly service: CommitHistoryService) {
    super(service);
  }
}
