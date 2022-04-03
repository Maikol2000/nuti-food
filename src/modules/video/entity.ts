import moment from "moment";

class VideoEntity {
  beatId: string = "";
  playerId: string = "";
  videoName: string = "";
  videoOrginal: string = " ";
  videoMix: null = null;
  videoAnimationId: null = null;
  videoInfo: null = null;
  totalView: number = 0;
  totalLike: number = 0;
  videoStatus: number = 0;
  beat: Beat | null = null;
  player: Player | null = null;
  videoAnimation: null = null;
  id: string = "";
  createAt: string = "";
  updateAt: string = "";
  isLike:boolean = false;
  videoThumbnail:null = null;

  constructor(video: any) {
    if (!video) return;
    Object.assign(this, video);
    this.createAt = video.createAt
      ? moment(video.createAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = video.updateAt
      ? moment(video.updateAt).format("DD/MM/YYYY")
      : "";
  }
  static createListVideo(listVideo: Array<any>) {
    if (!Array.isArray(listVideo)) return [];
    return listVideo.map((video: VideoEntity) => {
      return new VideoEntity(video);
    });
  }
}
export default VideoEntity;

export interface Beat {
  beatName: string;
  beatThumbnail: null;
  beatContent: string;
  beatAuthor: string;
  beatSinger: string;
  beatLyric: string;
  beatTag: null;
  beatTotalCover: number;
  id: string;
  createAt: string;
  updateAt: string;
}

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
