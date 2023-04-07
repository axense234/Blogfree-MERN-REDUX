// Redux
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// Axios
import axios from "axios";

const blogsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = blogsAdapter.getInitialState({
  getAllBlogsStatus: "idle",
  getSingleBlogStatus: "idle",
});

// NODE_ENV: development
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000`
    : "https://blogfree-server-ca.onrender.com";

export const getAllBlogs = createAsyncThunk(
  "blogs/getAllBlogs",
  async ({ query = "", limit = 25 }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/blogs/view-blogs?searchQuery=${query}&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async ({ newBlog, jwt }) => {
    console.log("started create blog");
    try {
      console.log("sending away the request");
      const { data } = await axios.post(
        `${BASE_URL}/blogs/create-blog`,
        newBlog,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("made a blog lol");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ newBlog, jwt, id }) => {
    console.log("started updating blog");
    try {
      console.log("sending away the request");
      const { data } = await axios.patch(
        `${BASE_URL}/blogs/edit-blog/${id}`,
        newBlog,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("edited a blog lol");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async ({ blogId, jwt }) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/blogs/delete-blog/${blogId}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      console.log("deleted blog");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleBlog = createAsyncThunk(
  "blogs/getSingleBlog",
  async (blogId) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/blogs/view-blog/${blogId}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearBlogs(state, action) {
      blogsAdapter.removeAll(state);
    },
    updateBlogReactionsLocal(state, action) {
      const { type, id } = action.payload;
      state.entities[id].reactions[type]++;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBlogs.pending, (state, action) => {
        state.getAllBlogsStatus = "pending";
        blogsAdapter.removeAll(state);
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        const blogs = action.payload.blogs;
        if (blogs) {
          const changedBlogs = blogs.map((blog) => {
            blog.id = blog._id;
            delete blog._id;
            return blog;
          });

          blogsAdapter.upsertMany(state, changedBlogs);
          state.getAllBlogsStatus = "succeded";
        }
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.getAllBlogsStatus = "failed";
        console.log(action.payload);
        blogsAdapter.removeAll(state);
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        console.log("create blog fullfilled");
        const blog = action.payload;
        if (blog) {
          blog.id = blog._id;
          delete blog._id;
        }
        blogsAdapter.addOne(state, action.payload);
      })
      .addCase(getSingleBlog.pending, (state, action) => {
        state.getSingleBlogStatus = "pending";
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        const blog = action.payload;
        if (blog) {
          blog.id = blog._id;
          delete blog._id;
        }
        blogsAdapter.upsertOne(state, blog);
        state.getSingleBlogStatus = "succeded";
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const blog = action.payload;
        if (blog) {
          blog.id = blog._id;
          delete blog._id;
        }
        blogsAdapter.upsertOne(state, blog);
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        const blog = action.payload;
        if (blog) {
          blog.id = blog._id;
          delete blog._id;
        }
        blogsAdapter.removeOne(state, blog.id);
      });
  },
});

// Actions
export const { clearBlogs, updateBlogReactionsLocal } = blogsSlice.actions;

// Selectors
export const getAllBlogsStatus = (state) => state.blogs.getAllBlogsStatus;
export const getSingleBlogStatus = (state) => state.blogs.getSingleBlogStatus;
export const {
  selectAll: getAllBlogsSelector,
  selectById: getBlogById,
  selectIds: getAllBlogIds,
} = blogsAdapter.getSelectors((state) => state.blogs);

export default blogsSlice.reducer;
