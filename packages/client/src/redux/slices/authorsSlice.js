// Redux
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
// Axios
import axios from "axios";

// NODE_ENV: development
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000`
    : "https://blogfree-server-ca.onrender.com";

const authorsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = authorsAdapter.getInitialState({
  getAuthorStatus: "idle", // "idle" | "pending" | "succeded"
  getAllAuthorsStatus: "idle", // "idle" | "pending" | "succeded" | "failed"
});

export const getAuthor = createAsyncThunk("authors/getAuthor", async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/authors/view-author/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllAuthors = createAsyncThunk(
  "authors/getAllAuthors",
  async ({ query = "", limit = 25 }) => {
    console.log(limit, "limit look");
    try {
      console.log("get all authors");
      const { data: authors } = await axios.get(
        `${BASE_URL}/authors/authors-list?searchQuery=${query}&limit=${limit}`
      );
      return authors.authors;
    } catch (error) {
      console.log(error);
    }
  }
);

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    clearAuthors(state, action) {
      authorsAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthor.pending, (state, action) => {
        state.getAuthorStatus = "pending";
      })
      .addCase(getAuthor.fulfilled, (state, action) => {
        const author = action.payload;
        author.id = author._id;
        delete author._id;
        authorsAdapter.upsertOne(state, author);
        state.getAuthorStatus = "succeded";
      })
      .addCase(getAllAuthors.pending, (state, action) => {
        state.getAllAuthorsStatus = "pending";
        authorsAdapter.removeAll(state);
      })
      .addCase(getAllAuthors.fulfilled, (state, action) => {
        const authors = action.payload;
        const modifiedAuthors = authors.map((author) => {
          author.id = author._id;
          delete author._id;
          return author;
        });
        authorsAdapter.upsertMany(state, modifiedAuthors);
        state.getAllAuthorsStatus = "succeded";
      })
      .addCase(getAllAuthors.rejected, (state, action) => {
        state.getAllAuthorsStatus = "failed";
        authorsAdapter.removeAll(state);
      });
  },
});

// Selectors
export const {
  selectAll: getAllAuthorsSelector,
  selectById: getAuthorByIdSelector,
  selectIds: getAllAuthorsIdsSelector,
} = authorsAdapter.getSelectors((state) => state.authors);
export const getAuthorStatusSelector = (state) => state.authors.getAuthorStatus;
export const getAllAuthorsStatusSelector = (state) =>
  state.authors.getAllAuthorsStatus;
// Actions
export const { clearAuthors } = authorsSlice.actions;

export default authorsSlice.reducer;
