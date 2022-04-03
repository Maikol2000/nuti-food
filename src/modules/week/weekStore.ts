import { isEmpty } from "lodash";
import { createAction, createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import WeekEntity from "./entity";
import { RootState } from "@modules";

const weekStore = createSlice({
  name: "weekStore",
  initialState: {
    weekId: {},
    weekList: [],
  } as any,
  reducers: {
    updateWeekList: (state, action: PayloadAction<WeekEntity[]>) => {
      return {
        ...state,
        weekList: action.payload,
        weekId: !isEmpty(action.payload) && action.payload[0],
      };
    },
    preWeek: (state, action: PayloadAction<{ idWeek: string }>) => {
      let newCurrentWeek = state.weekList.find(
        (item: WeekEntity) => item.id == action.payload.idWeek
      );
      return {
        ...state,
        weekId: newCurrentWeek,
      };
    },
    nextWeek: (state, action: PayloadAction<{ idWeek: string }>) => {
      let newCurrentWeek = state.weekList.find(
        (item: WeekEntity) => item.id == action.payload.idWeek
      );
      return {
        ...state,
        weekId: newCurrentWeek,
      };
    },
  },
});

interface IWeek{
  weekList:WeekEntity[]
}

export const WeekSelector:Selector<RootState,IWeek> =(state)=>{
  return {
    weekList:state.weekStore.weekList||[]
  }
}

export default weekStore;
