import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setCurrentUser = createAsyncThunk(
    "verifyUser",
    async (data, { rejectWithValue }) => {
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/verify",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data}`,
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
  

const currentUser = createSlice({
  name: "currentUser",
  initialState: {
    loading: true,
    user: "",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(setCurrentUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
     
      state.loading = false;
    });
    builder.addCase(setCurrentUser.rejected, (state, action) => {
     
      state.loading = false;
      state.error = true;
    });
  },
});

export { setCurrentUser };
export default currentUser;
