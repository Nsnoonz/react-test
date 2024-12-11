
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isOpenSidebar: boolean;
  isLoading: boolean;
  isModal: boolean;
  isLang: string;
}

const initialState: AppState = {
  isOpenSidebar: false,
  isLoading: false,
  isModal: false,
  isLang: 'en'
};
const storeConfig = createSlice({
  name: 'Nsnoonz',
  initialState,
  reducers: {
    setToggleSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenSidebar = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setModal(state, { payload }: PayloadAction<boolean>) {
      state.isModal = payload;
    },
    setLang(state, { payload }: PayloadAction<string>) {
      state.isLang = payload;
    },
  },
});


export const { setToggleSidebar, setLang, setLoading, setModal } = storeConfig.actions;
const store = configureStore({
  reducer: storeConfig.reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;