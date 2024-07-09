import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userToken = createAsyncThunk(
  "userToken",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        data, // Correctly pass data here
        {
          headers: {
            "Content-Type": "application/json",
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


const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    loading: true,
    token: "",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(userToken.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userToken.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
     
      state.error = false;
    });
    builder.addCase(userToken.rejected, (state, action) => {
      console.error("Error", action.payload.error); // Log the actual error message
      state.loading = false;
      state.error = true;
    });
  },
});
export const { userLogout } = userInfoSlice.actions;
export { userToken };
export default userInfoSlice;
