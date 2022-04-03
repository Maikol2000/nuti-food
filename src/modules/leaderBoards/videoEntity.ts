import moment from "moment";
import { IPlayer, IWeek } from "./entity";

class LeaderVideoBoardsEntity {
  videoId: string = "";
  weekId: string = "";
  playerId: string = "";
  totalView: number = 0;
  totalLike: number = 0;
  viewUpdateAt: string = "";
  likeUpdateAt: string = "";
  video: IVideo | null = null;
  week: IWeek | null = null;
  player: IPlayer | null = null;
  id: string = "";
  createAt: string = "";
  updateAt: string = "";

  constructor(leaderVideoBoards: any) {
    if (!leaderVideoBoards) return;
    Object.assign(this, leaderVideoBoards);
    this.createAt = leaderVideoBoards.createAt
      ? moment(leaderVideoBoards.createAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = leaderVideoBoards.updateAt
      ? moment(leaderVideoBoards.updateAt).format("DD/MM/YYYY")
      : "";
  }
  static createListVideoLeaderBoards(LeaderVideo: Array<any>) {
    if (!Array.isArray(LeaderVideo)) return [];
    return LeaderVideo.map((LeaderVideoItem: LeaderVideoBoardsEntity) => {
      return new LeaderVideoBoardsEntity(LeaderVideoItem);
    });
  }
}

export default LeaderVideoBoardsEntity;

export interface Player {
  playerName: string;
  playerPhone: string;
  playerAvatar: null;
  videos: null;
  totalVideo: number;
  totalView: number;
  totalLike: number;
  id: string;
  createAt: string;
  updateAt: string;
}

export interface IVideo {
  beatId: string;
  playerId: string;
  videoName: string;
  videoThumbnail: null;
  videoOrginal: string;
  videoMix: string;
  videoAnimationId: null;
  videoInfo: VideoInfo;
  totalView: number;
  totalLike: number;
  videoStatus: number;
  beat: Beat;
  player: Player;
  videoAnimation: null;
  isLike: boolean;
  id: string;
  createAt: string;
  updateAt: string;
}

export interface Beat {
  beatName: string;
  beatThumbnail: null;
  beatContent: string;
  beatAuthor: string;
  beatSinger: string;
  beatLyric: string;
  beatTag: string;
  beatTotalCover: number;
  id: string;
  createAt: string;
  updateAt: string;
}

export interface VideoInfo {
  normal: Jazz;
  rock: Jazz;
  pop: Jazz;
  jazz: Jazz;
}

export interface Jazz {
  eq: number;
  value: number;
}
