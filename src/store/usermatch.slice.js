import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUserMatchRequest = createAsyncThunk(
    "setUserMatchR",
    async (data, { rejectWithValue }) => {
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/matchrequest",
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


  const matchedRequest = createSlice({
    name: "matchRequest",
    initialState: {
      loading: true,
      user: "",
      error: false,
    },
    extraReducers: (builder) => {
      builder.addCase(setUserMatchRequest.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(setUserMatchRequest.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      });
      builder.addCase(setUserMatchRequest.rejected, (state, action) => {
       
        state.loading = false;
        state.error = true;
      });
    },
  });
  
 export {setUserMatchRequest}
  export default matchedRequest;