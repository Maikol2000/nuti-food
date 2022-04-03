import { combineReducers } from "@reduxjs/toolkit";
import profileStore from "./authentication/profileStore";
import translateStoreRedux from "./setting/settingStore";
import userStore from "./user/userStore";
import weekStore from "./week/weekStore";

const appReducer = combineReducers({
  profile: profileStore.reducer,
  settingStore: translateStoreRedux.reducer,
  userStore: userStore.reducer,
  weekStore: weekStore.reducer,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
