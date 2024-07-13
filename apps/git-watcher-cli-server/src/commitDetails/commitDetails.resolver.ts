import * as graphql from "@nestjs/graphql";
import { CommitDetailsResolverBase } from "./base/commitDetails.resolver.base";
import { CommitDetails } from "./base/CommitDetails";
import { CommitDetailsService } from "./commitDetails.service";

@graphql.Resolver(() => CommitDetails)
export class CommitDetailsResolver extends CommitDetailsResolverBase {
  constructor(protected readonly service: CommitDetailsService) {
    super(service);
  }
}
