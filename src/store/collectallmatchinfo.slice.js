import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const collectUserMatchrequest = createAsyncThunk(
  "CollectLoveReact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/getallmatchrequest",
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
      const result = response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const rejectMatchReq = createAsyncThunk(
  "matchReject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/deletmatchrequest",
        {
          userId: data.userId,
          loveId: data.loveId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const result = response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const collectMatchRequestinfo = createSlice({
  name: "collectMatchRequest",
  initialState: {
    loading: true,
    matchdata: [
      
    ],
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(collectUserMatchrequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(collectUserMatchrequest.fulfilled, (state, action) => {
        if(action.payload != "No matchs For you"){
          state.matchdata = action.payload;
        }
        
        state.loading = false;
      })
      .addCase(collectUserMatchrequest.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(rejectMatchReq.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(rejectMatchReq.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(rejectMatchReq.rejected, (state, action) => {
       
        state.loading = false;
        state.error = true;
      })  
  },
  reducers: {
    deleteMatch: (state, action) => {
      const arr = [];
      for (let i = 0; i < state.matchdata.length; i++) {
        if (action.payload != state.matchdata[i]._id) {
          arr.push(state.matchdata[i]);
        } else {
          continue;
        }
      }
      state.matchdata = arr;
    },
  },
});
export const { deleteMatch } = collectMatchRequestinfo.actions;
export {collectUserMatchrequest , rejectMatchReq}
export default collectMatchRequestinfo;
