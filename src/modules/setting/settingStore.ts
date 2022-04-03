import {
  createAction,
  createSlice,
  PayloadAction,
  Selector,
} from "@reduxjs/toolkit";
import { Locale } from "@locale/index";
import { RootState } from "@modules";
interface IStore {
  language: keyof Locale;
  pages: any[];
}
const initStore = createAction<undefined>("persist/REHYDRATE");

const settingStore = createSlice({
  name: "settingStore",
  initialState: {
    language: "vi",
    pages: [0],
  } as IStore,
  reducers: {
    updateLanguage: (state, action: PayloadAction<keyof Locale>) =>
      Object.assign(state, { language: action.payload }),
    pushPage: (state, action: PayloadAction<any>) => {
      const cPages = [...state.pages];
      cPages.push(action.payload);
      return Object.assign(state, { pages: cPages });
    },
    pullPage: (state) => {
      if (state.pages.length <= 1) {
        return { ...state };
      }
      const cPages = [...state.pages];
      cPages.pop();
      return Object.assign(state, { pages: cPages });
    },
    cleanHistory: (state) => {
      const pages = [0];
      return Object.assign(state, { pages });
    },
  },
  extraReducers: (builder) => {
    return builder.addCase(initStore, (state, action) => {
      return {
        ...state,
        pages: [0],
      };
    });
  },
});

interface ILang {
  language: string;
}
export const LanguageSelector: Selector<RootState, ILang> = (state) => {
  return {
    language: state.settingStore.language,
  };
};

export default settingStore;
