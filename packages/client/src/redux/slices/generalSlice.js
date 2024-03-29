// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Data
import {
  defaultBlogSettings,
  defaultFormModal,
  defaultOverlay,
  defaultPHFilters,
  defaultProfile,
} from "../../data";
// Axios
import axios from "axios";

// NODE_ENV: development
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000`
    : "https://blogfree-server-ca.onrender.com";

export const getProfile = createAsyncThunk(
  "authors/getProfile",
  async (jwt) => {
    try {
      console.log("get profile");
      const profile = await axios.get(`${BASE_URL}/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      return profile.data;
    } catch (error) {
      return error.response.data.msg;
    }
  }
);

export const loginAuthor = createAsyncThunk(
  "authors/loginAuthor",
  async (formInput, jwt) => {
    try {
      // HTTP Request
      console.log(formInput);
      const { data: token } = await axios.post(`${BASE_URL}/login`, formInput, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      return token;
    } catch (error) {
      return error;
    }
  }
);

export const signupAuthor = createAsyncThunk(
  "authors/createAuthor",
  async (formInput) => {
    try {
      console.log(formInput);
      const { data } = await axios.post(`${BASE_URL}/signup`, formInput);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const updateProfile = createAsyncThunk(
  "authors/updateAuthor",
  async ({ jwt, authorId = "", newAuthor }) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/authors/edit-author/${authorId}`,
        newAuthor,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  "authors/updateAuthorImage",
  async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data);
      formData.append("upload_preset", "tqx8l9ud");

      const postRes = await axios.post(
        "https://api.cloudinary.com/v1_1/birthdayreminder/image/upload",
        formData
      );
      return postRes.data.secure_url;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  profile: defaultProfile,
  jwt: localStorage.getItem("JWT") || "",
  blogSettings: defaultBlogSettings,
  tempFavorites: [],
  status: "idle",
  mode: "default",
  phFilters: defaultPHFilters,
  sbmQueryInput: "",
  phInput: "",
  formModal: defaultFormModal,
  overlay: defaultOverlay,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    logoutProfile(state, action) {
      state.jwt = "";
      localStorage.clear();
      window.location.href = "/";
    },
    changeMode(state, action) {
      state.mode = action.payload;
      console.log(action.payload);
    },
    updateBlogSettings(state, action) {
      const { value, type, mode = "single", load } = action.payload;
      if (mode === "single") {
        state.blogSettings[type] = value;
      } else if (mode === "multiple") {
        state.blogSettings = load;
      }
    },
    updateProfileLocal(state, action) {
      const { value, type } = action.payload;
      state.profile[type] = value;
    },
    clearBlogSettings(state, action) {
      console.log("clearing blog settings");
      state.blogSettings = defaultBlogSettings;
    },
    updateTempFavorites(state, action) {
      const newFavorites = action.payload;
      state.tempFavorites = newFavorites;
    },
    updateSbmQueryInput(state, action) {
      const input = action.payload;
      state.sbmQueryInput = input;
    },
    updatePhInput(state, action) {
      const input = action.payload;
      state.phInput = input;
      console.log("updated ph input");
    },
    updateFormModal(state, action) {
      state.formModal = action.payload;
    },
    updateOverlay(state, action) {
      state.overlay = action.payload;
    },
    changePHFilters(state, action) {
      const { type, categoryValue = "" } = action.payload;
      console.log(type);
      if (type === "category") {
        state.phFilters.category.value = categoryValue;
      } else {
        if (type === "authors") {
          state.phFilters[type] = !state.phFilters[type];
          state.phFilters["blogs"] = false;
        } else if (type === "blogs") {
          state.phFilters[type] = !state.phFilters[type];
          state.phFilters["authors"] = false;
        } else if (type === "favorites") {
          state.phFilters[type] = !state.phFilters[type];
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.status = "pending";
        console.log("request pending");
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        const profile = action.payload;
        if (profile === "jwt expired") {
          state.jwt = "";
          localStorage.clear();
          window.location.href = "/";
        } else if (profile) {
          profile.id = profile._id;
          delete profile._id;
          state.profile = profile;
          state.blogSettings.author = profile.id;
          state.tempFavorites = profile.favorites;
          console.log(profile);
          state.status = "succeded";
        }
      })
      .addCase(loginAuthor.fulfilled, (state, action) => {
        if (!action.payload?.token) {
          console.log("updated form modal");
          console.log(action.payload);
          state.formModal = {
            color: "red",
            msg: action.payload.response.data.msg,
            show: true,
          };
        } else {
          localStorage.setItem("JWT", action.payload.token);
          state.jwt = action.payload.token;
          window.location.href = "/";
        }
      })
      .addCase(signupAuthor.fulfilled, (state, action) => {
        if (!action.payload?.token) {
          console.log("updated form modal");
          console.log(action.payload);
          state.formModal = {
            color: "red",
            msg: action.payload.response.data.msg,
            show: true,
          };
        } else {
          localStorage.setItem("JWT", action.payload.token);
          state.jwt = action.payload.token;
          window.location.href = "/profile";
        }
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        const profile = action.payload;
        if (profile) {
          profile.id = profile._id;
          delete profile._id;
          state.profile = profile;
          state.tempFavorites = profile.favorites;
        }
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        const secureUrl = action.payload;
        state.profile.imgUrl = secureUrl;
      });
  },
});

// Selectors
export const getJWT = (state) => state.general.jwt;
export const getProfileSelector = (state) => state.general.profile;
export const getBlogSettingsSelector = (state) => state.general.blogSettings;
export const getProfileStatus = (state) => state.general.status;
export const getTempFavorites = (state) => state.general.tempFavorites;
export const getMode = (state) => state.general.mode;
export const getPHFilters = (state) => state.general.phFilters;
export const getSbmQueryInput = (state) => state.general.sbmQueryInput;
export const getPhInput = (state) => state.general.phInput;
export const getFormModal = (state) => state.general.formModal;
export const getOverlay = (state) => state.general.overlay;
// Actions
export const {
  logoutProfile,
  updateBlogSettings,
  clearBlogSettings,
  updateTempFavorites,
  updateProfileLocal,
  changeMode,
  changePHFilters,
  updateSbmQueryInput,
  updatePhInput,
  updateFormModal,
  updateOverlay,
} = generalSlice.actions;

export default generalSlice.reducer;
