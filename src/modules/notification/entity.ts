import moment from "moment";

class NotificationEntity {
  notificationContentEng: string = "";
  notificationContentVi: string = "";
  videoId: string = "";
  playerId: string = "";
  notificationType: 0 | 1 | 2 = 0;
  notificationStatus: 0 | 1 = 0;
  id: string = "";
  createAt: string = "";
  updateAt: string = "";
  constructor(notification: any) {
    if (!notification) return;
    Object.assign(this, notification);
    this.createAt = notification.createAt
      ? moment(notification.createAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = notification.updateAt
      ? moment(notification.updateAt).format("DD/MM/YYYY")
      : "";
  }
  static createListNotification(listNotification: Array<any>) {
    if (!Array.isArray(listNotification)) return [];
    return listNotification.map((notification: NotificationEntity) => {
      return new NotificationEntity(notification);
    });
  }
}
export default NotificationEntity;
