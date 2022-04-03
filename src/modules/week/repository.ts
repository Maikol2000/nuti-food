import httpRepository from "@core/repository/http";
import WeekEntity from "./entity";

// API GET
export const getListWeek = async (): Promise<WeekEntity[]> => {
  return await httpRepository.execute({
    path: "/api/weeks",
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return WeekEntity.createListWeek(res);
    },
  });
};

//API ADD
export const addWeek = async (payload) => {
  return await httpRepository.execute({
    path: "/api/week",
    method: "post",
    payload,
  });
};
