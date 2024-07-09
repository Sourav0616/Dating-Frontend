import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const regesterUser = createAsyncThunk(
  "userRegester",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/regester",
        data, // Correctly pass data here
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

const userRegesterSlice = createSlice({
  name: "userRegester",
  initialState: {
    loading: true,
    success: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(regesterUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(regesterUser.fulfilled, (state, action) => {
      state.success = !state.success ;
  
    });
    builder.addCase(regesterUser.rejected, (state, action) => {
      
      state.loading = false;
      state.error = true;
    });
  },
});

export { regesterUser };
export default userRegesterSlice;
