import httpRepository from "@core/repository/http";
import NotificationEntity from "./entity";
import { PaginationEntity } from "@core/pagination/entity";
import { OptionEntity, TableEntity } from "@core/table";

// API GET
export const getListNotification = async (
  pagination: PaginationEntity,
  options: OptionEntity
) => {
  const params = new TableEntity(pagination, options);
  return await httpRepository.execute({
    path: "/api/notifications",
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: NotificationEntity.createListNotification(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

//API SEEN
export const seenNotification = async (id) => {
  return await httpRepository.execute({
    path: "/api/notifications/seen/" + id,
    method: "put",
    showError: false,
    showSuccess: false,
  });
};
