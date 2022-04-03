import httpRepository from "@core/repository/http";
import LeaderBoardsEntity from "./entity";
import { PaginationEntity } from "@core/pagination/entity";
import { OptionEntity, TableEntity } from "@core/table";
import LeaderVideoBoardsEntity from "./videoEntity";
interface ILeaderBoardsParams {
  WeekId: string;
  TopType: string;
}
export const getListLeaderBoards = async (
  pagination: PaginationEntity,
  options: OptionEntity
) => {
  const params = new TableEntity(pagination, options);
  return await httpRepository.execute({
    path: "/api/leaderBoards/player",
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        detail: res ? res.detail : null,
        data: LeaderBoardsEntity.createListLeaderBoards(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

export const getListVideoLeaderBoards = async (
  pagination: PaginationEntity,
  options: OptionEntity
) => {
  const params = new TableEntity(pagination, options);
  return await httpRepository.execute({
    path: "/api/leaderBoards/Video",
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: LeaderVideoBoardsEntity.createListVideoLeaderBoards(
          res?.pagedData
        ),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};
