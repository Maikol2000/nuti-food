import React from "react";
import NotificationIcon from "@assets/icon/Notification";
import { NOTIFICATION_STATUS } from "@modules/notification/constants";
import NotificationEntity from "@modules/notification/entity";
import notificationPresenter from "@modules/notification/presenter";
import { useAsync } from "@shared/hook/useAsync";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
interface INotificationNavBar {
  className?:string
}
const NotificationNavBar: React.FC<INotificationNavBar> = (props) => {
  const history = useHistory();
  const { getListNotification } = notificationPresenter;
  const [getListNotificationCall] = useAsync(getListNotification);
  const [isNew, setIsNew] = useState(false);
  useEffect(() => {
    getListNotificationCall.execute().then((res) => {
      setIsNew(
        res.data.some((item: NotificationEntity) => {
          return item.notificationStatus == NOTIFICATION_STATUS.NOT_SEEN;
        })
      );
    });
  }, []);
  return (
    <Badge dot={isNew} className={props.className}>
      <NotificationIcon onClick={() => history.push("/notification")} />
    </Badge>
  );
};
export default NotificationNavBar;
