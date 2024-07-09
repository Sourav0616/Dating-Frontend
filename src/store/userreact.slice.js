import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUserLoveReact = createAsyncThunk(
    "setUserLoveReact",
    async (data, { rejectWithValue }) => {
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/react",
          {
            userId : data.userId,
            loveId : data.loveId
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
  

const loveReact = createSlice({
  name: "loveReact",
  initialState: {
    loading: true,
    user: "",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(setUserLoveReact.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setUserLoveReact.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(setUserLoveReact.rejected, (state, action) => {
     
      state.loading = false;
      state.error = true;
    });
  },
});

export { setUserLoveReact };
export default loveReact;
