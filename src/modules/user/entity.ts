import moment from "moment";

class UserEntity {
  playerName: string = "";
  playerPhone: string = "";
  playerAvatar: string = "";
  videos: string = "";
  totalVideo: number = 0;
  totalView: number = 0;
  totalLike: number = 0;
  id: string = "";
  createAt: string = "";
  updateAt: string = "";

  constructor(user) {
    if (!user) return;
    Object.assign(this, user);
    this.createAt = user.createdAt
      ? moment(user.createdAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = user.updatedAt
      ? moment(user.updatedAt).format("DD/MM/YYYY")
      : "";
  }

  static createArrayUser(arrUser: Array<any>): Array<UserEntity> {
    const list = arrUser.map((x) => new UserEntity(x));
    return list;
  }
}

export default UserEntity;
