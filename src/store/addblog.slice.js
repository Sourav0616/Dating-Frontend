import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addBlog = createAsyncThunk(
  "addBlog",
  async (data, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("createrid", data.createrid);
      formData.append("tags", data.tags);
      formData.append("description", data.description);
      formData.append("useravatar", data.useravatar);
      formData.append("name", data.name);
      formData.append("avatar", data.avatar);
      formData.append("type", data.type);
      const response = await axios.post(
        "http://localhost:8000/api/blog/addblog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const getAllBlogs = createAsyncThunk(
  "getall",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blog/getall",
        {
          userId: data.userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const addComment = createAsyncThunk(
  "addcomment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blog/addcomment",
        {
          type: data.type,
          blogId: data.blogId,
          userId: data.createrId,
          massage: data.massage, // Correct the property name
          createrAvatar: data.createrAvatar,
          createrName: data.createrName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const likeBlog = createAsyncThunk(
  "likeblog",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blog/likeblog",
        {
          blogId: data.blogId,
          userId: data.whoReact,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const disLikeBlog = createAsyncThunk(
  "dislike",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blog/dislikeblog",
        {
          blogId: data.blogId,
          userId: data.whoReact,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const userBlogs = createSlice({
  name: "userblog",
  initialState: {
    loading: false,
    blogs: [
     
    ],
    error: false,
    weating: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addBlog.pending, (state, action) => {
      state.loading = true;
      state.weating = false;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.weating = true;
      state.blogs = [action.payload, ...state.blogs];
    
      state.loading = false;
    });
    builder.addCase(addBlog.rejected, (state, action) => {
    
      state.loading = false;
      state.error = true;
      state.weating = false;
    });
    builder.addCase(getAllBlogs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
     
      state.loading = false;
      state.error = true;
    });
    builder.addCase(addComment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      if (state.blogs.length > 0) {
        for (let i = 0; i < state.blogs.length; i++) {
          if (state.blogs[i]._id == action.payload.postId) {
            state.blogs[i].comments = [
              action.payload,
              ...state.blogs[i].comments,
            ];
          }
        }
      }
      state.loading = false;
    });
    builder.addCase(addComment.rejected, (state, action) => {
    
      state.loading = false;
      state.error = true;
    });
    builder.addCase(likeBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(likeBlog.fulfilled, (state, action) => {
 
      if (action.payload != "You already like this post") {
        if (state.blogs.length > 0) {
          for (let i = 0; i < state.blogs.length; i++) {
            if (state.blogs[i]._id == action.payload.postId) {
              state.blogs[i].like.push(action.userId);
            }
          }
        }
      }

      state.loading = false;
    });
    builder.addCase(likeBlog.rejected, (state, action) => {
   
      state.loading = false;
      state.error = true;
    });
    builder.addCase(disLikeBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(disLikeBlog.fulfilled, (state, action) => {
      
      if (action.payload != "You already dislike this post") {
        if (state.blogs.length > 0) {
          for (let i = 0; i < state.blogs.length; i++) {
            if (state.blogs[i]._id == action.payload.postId) {
              state.blogs[i].dislike.push(action.userId);
            }
          }
        }
      }
      state.loading = false;
    });
    builder.addCase(disLikeBlog.rejected, (state, action) => {
   
      state.loading = false;
      state.error = true;
    });
  },
});

export { addBlog, getAllBlogs, addComment, likeBlog, disLikeBlog };
export default userBlogs;
