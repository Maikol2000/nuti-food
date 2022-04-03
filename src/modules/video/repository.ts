import httpRepository from "@core/repository/http";
import VideoEntity from "./entity";
import { PaginationEntity } from "@core/pagination/entity";
import { OptionEntity, TableEntity } from "@core/table";

// API GET
export const getListVideo = async (
  pagination: PaginationEntity,
  options: OptionEntity
) => {
  const filter = Object.assign({videoStatus:1},options.filter)
  const params = new TableEntity(pagination, {...options,filter});
  
  return await httpRepository.execute({
    path: "/api/Videos",
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: VideoEntity.createListVideo(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};
//and get detail
export const getDetailVideo = async (id) => {
  return await httpRepository.execute({
    path: "/api/Videos/" + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new VideoEntity(res);
    },
  });
};

//API ADD
export const addVideo = async (payload) => {
  console.log(payload)
  return await httpRepository.execute({
    path: "/api/Videos",
    method: "post",
    showSuccess: false,
    showError: true,
    payload,
    config:{isFormData:true}
  });
};

//API EDIT/UPDATE
export const editVideo = async (id, payload) => {
  return await httpRepository.execute({
    path: "/api/video/" + id,
    method: "put",
    payload,
  });
};

//API DELETE
export const deleteVideo = async (id) => {
  return await httpRepository.execute({
    path: "/api/video/" + id,
    method: "delete",
  });
};

// Get MY Video
export const getMyVideo = async (
  pagination: PaginationEntity,
  options: OptionEntity
) => {
  const params = new TableEntity(pagination, options);
  return await httpRepository.execute({
    path: "/api/videos/myVideo",
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: VideoEntity.createListVideo(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

//GET VIDEO ANIMATION
export const getVideoAnimation = async (params) => {
  return await httpRepository.execute({
    path: "/api/Videos/VideoAnimation",
    showSuccess: false,
    showError: false,
    params
  });
};

//API ACTION
export const actionVideo = async (id, payload) => {
  return await httpRepository.execute({
    path: "/api/videos/action/" + id,
    method: "put",
    payload,
    showSuccess: false,
    showError: false,
  });
};

//API REPORT
export const reportVideo = async (payload) => {
  return await httpRepository.execute({
    path: "/api/Reports",
    method: "post",
    payload,
    showSuccess: false,
    showError: false,
  });
};


export const getVideoSuggest = async ():Promise<VideoEntity|undefined> => {
  return await httpRepository.execute({
    path: "/api/Videos/Suggest",
    method: "get",
    showSuccess: false,
    showError: false,
    convert:(data)=>{
      if(data==null)  return undefined;
      return new VideoEntity(data);
    }
  });
};