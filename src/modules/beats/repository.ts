import httpRepository from "@core/repository/http";
import BeatsEntity from "./entity";
import { PaginationEntity } from "@core/pagination/entity";
import { OptionEntity, TableEntity } from "@core/table";

// API GET 
export const getListBeats = async (pagination:PaginationEntity,options:OptionEntity) => {
  const params = new TableEntity(pagination,options);
  return await httpRepository.execute({
    path: '/api/beats',
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: BeatsEntity.createListBeats(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo)
      };
    }
  });
};

  //and get detail
export const getDetailBeats = async (id) => {
  return await httpRepository.execute({
    path: '/api/beats/' + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new BeatsEntity(res);
    }
  });
};


//API ADD
export const addBeats = async (payload) => {
  return await httpRepository.execute({
    path: '/api/beats',
    method: "post",
    payload
  })
}


//API EDIT/UPDATE
export const editBeats = async (id, payload) => {
  return await httpRepository.execute({
    path: '/api/beats/' + id,
    method: "put",
    payload
  })
}


//API DELETE
export const deleteBeats = async (id) => {
  return await httpRepository.execute({
    path: '/api/beats/' + id,
    method: "delete",
  });
};