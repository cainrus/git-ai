/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommitDetailsService } from "../commitDetails.service";
import { CommitDetailsCreateInput } from "./CommitDetailsCreateInput";
import { CommitDetails } from "./CommitDetails";
import { CommitDetailsFindManyArgs } from "./CommitDetailsFindManyArgs";
import { CommitDetailsWhereUniqueInput } from "./CommitDetailsWhereUniqueInput";
import { CommitDetailsUpdateInput } from "./CommitDetailsUpdateInput";

export class CommitDetailsControllerBase {
  constructor(protected readonly service: CommitDetailsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CommitDetails })
  async createCommitDetails(
    @common.Body() data: CommitDetailsCreateInput
  ): Promise<CommitDetails> {
    return await this.service.createCommitDetails({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fileName: true,
        changeType: true,
        changeSummary: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CommitDetails] })
  @ApiNestedQuery(CommitDetailsFindManyArgs)
  async commitDetailsItems(
    @common.Req() request: Request
  ): Promise<CommitDetails[]> {
    const args = plainToClass(CommitDetailsFindManyArgs, request.query);
    return this.service.commitDetailsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fileName: true,
        changeType: true,
        changeSummary: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CommitDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async commitDetails(
    @common.Param() params: CommitDetailsWhereUniqueInput
  ): Promise<CommitDetails | null> {
    const result = await this.service.commitDetails({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fileName: true,
        changeType: true,
        changeSummary: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CommitDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCommitDetails(
    @common.Param() params: CommitDetailsWhereUniqueInput,
    @common.Body() data: CommitDetailsUpdateInput
  ): Promise<CommitDetails | null> {
    try {
      return await this.service.updateCommitDetails({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fileName: true,
          changeType: true,
          changeSummary: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CommitDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCommitDetails(
    @common.Param() params: CommitDetailsWhereUniqueInput
  ): Promise<CommitDetails | null> {
    try {
      return await this.service.deleteCommitDetails({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fileName: true,
          changeType: true,
          changeSummary: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}