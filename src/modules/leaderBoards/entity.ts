import moment from "moment";

class LeaderBoardsEntity {
  weekId: string = "";
  playerId: string = "";
  totalView: number = 0;
  totalLike: number = 0;
  viewUpdateAt: string = "";
  likeUpdateAt: string = "";
  week: IWeek | null = null;
  player: IPlayer | null = null;
  id: string = "";
  createAt: string = "";
  updateAt: string = "";
  constructor(leaderBoards: any) {
    if (!leaderBoards) return;
    Object.assign(this, leaderBoards);
    this.createAt = leaderBoards.createAt
      ? moment(leaderBoards.createAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = leaderBoards.updateAt
      ? moment(leaderBoards.updateAt).format("DD/MM/YYYY")
      : "";
  }
  static createListLeaderBoards(listLeaderBoards: Array<any>) {
    if (!Array.isArray(listLeaderBoards)) return [];
    return listLeaderBoards.map((leaderBoards: LeaderBoardsEntity) => {
      return new LeaderBoardsEntity(leaderBoards);
    });
  }
}
export default LeaderBoardsEntity;

export interface IPlayer {
  playerName: string;
  playerPhone: string;
  playerAvatar: null | string;
  videos: null;
  totalVideo: number;
  totalView: number;
  totalLike: number;
  id: string;
  createAt: string;
  updateAt: string;
}

export interface IWeek {
  weekName: string;
  weekFrom: string;
  weekTo: string;
  id: string;
  createAt: string;
  updateAt: string;
}
