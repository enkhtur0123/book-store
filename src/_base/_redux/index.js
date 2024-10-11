import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "system",
  initialState: {
    loading: false,
    alert: { type: "", title: "", at: "", duration: 100, onScreen: false },
    hideNav: false,
    title: "",
    activeMenu: {},
    tabs: {
      tab0: null,
      tab1: null,
      tab2: null,
      tab3: null,
      tab4: null,
      tab5: null,
      tab6: null,
      tab7: null,
    },
  },
  reducers: {
    addTab: (state, { payload }) => {
      const old = Object.keys(state.tabs).find(
        (s) => state.tabs[s] && state.tabs[s].menuUrl === payload.menuUrl
      );
      if (!old) {
        for (let i = 0; i < Object.keys(state.tabs).length; i++) {
          const tab = Object.keys(state.tabs)[i];
          if (state.tabs[tab] === null) {
            state.tabs[tab] = payload;
            break;
          }
        }
      } else {
        state.activeMenu = payload;
      }
    },
    removeTab: (state, { payload }) => {
      state.tabs[payload] = null;
      let setActive = false;
      for (let i = 0; i < Object.keys(state.tabs).length; i++) {
        const tab = Object.keys(state.tabs)[i];
        if (state.tabs[tab] !== null) {
          state.activeMenu = state.tabs[tab];
          setActive = true;
          break;
        }
      }
      if (!setActive) {
        state.activeMenu = {};
      }
    },
    clearTab: (state) => {
      state.tabs = {
        tab0: null,
        tab1: null,
        tab2: null,
        tab3: null,
        tab4: null,
        tab5: null,
        tab6: null,
        tab7: null,
      };
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setNotify: (state, { payload }) => {
      state.alert = payload;
    },
    setAlert: (state, { payload }) => {
      if (!payload) {
        state.alert = payload;
      } else if (payload.type) {
        state.alert = {
          type: payload.type,
          message: payload.message,
          title: payload.type === "warning" ? "Анхааруулга" : "Алдаа гарлаа",
        };
      } else if (payload.success) {
        state.alert = {
          type: "success",
          message: payload.message,
          title: "Амжилттай",
        };
      } else {
        state.alert = {
          type: "error",
          message: payload.message,
          title: "Алдаа гарлаа",
        };
      }
    },

    setHideNav: (state, { payload }) => {
      state.hideNav = payload;
    },
    setActiveMenu: (state, { payload }) => {
      state.activeMenu = payload;
    },
  },
});

export const {
  setLoading,
  setAlert,
  setNotify,
  setHideNav,
  setActiveMenu,
  addTab,
  removeTab,
  clearTab,
  setTitle,
} = slice.actions;

export const setAlertByResponse =
  ({ response, successMessage }) =>
  (dispatch) => {
    let alert = null;
    if (response.code === 500) {
      alert = { success: false, message: "Алдаа гарлаа" };
    } else if (response.status === "error") {
      alert = {
        success: false,
        message: response.message ? response.message : "Алдаа гарлаа",
      };
    } else {
      alert = { success: true, message: successMessage };
    }
    dispatch(setAlert(alert));
    return alert;
  };

export const handleResponseError = (responseData) => (dispatch) => {
  if (!responseData.success) {
    if (responseData["error-type"] === "validation") {
      const errorMessages = responseData.errors
        .map((error) => error.message)
        .join("\n");
      dispatch(setAlert({ success: false, message: errorMessages }));
    } else {
      if (responseData.message) {
        dispatch(
          setAlert({
            success: false,
            message: responseData.message,
          })
        );
      } else {
        dispatch(setAlert({ success: false, message: "Алдаа гарлаа" }));
      }
    }
  }
  return true;
};

export default slice.reducer;
