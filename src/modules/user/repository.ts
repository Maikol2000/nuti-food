import httpRepository from "@core/repository/http";
import UserEntity from "@modules/user/entity";
import User from "@modules/user/entity";

const addUser = async (payload) => {
  return await httpRepository.execute({
    path: `/api/Accounts`,
    method: "post",
    payload,
    config: { isPrivate: true },
  });
};
const updateUser = async (payload, id) => {
  return await httpRepository.execute({
    path: `/api/Accounts/${id}`,
    method: "put",
    payload,
    config: { isPrivate: true },
  });
};

const deleteUser = async (payload) => {
  return await httpRepository.execute({
    path: `/api/Accounts/DeleteMany`,
    method: "post",
    payload,
    config: { isPrivate: true },
  });
};

const getDetailUser = async (params) => {
  return await httpRepository.execute({
    path: `/api/Accounts/${params}`,
    showError: false,
    showSuccess: false,
    convert: (res) => new UserEntity(res),
  });
};

export default {
  getDetailUser,
  addUser,
  updateUser,
  deleteUser,
};
