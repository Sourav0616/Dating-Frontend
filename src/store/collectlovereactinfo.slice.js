import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const collectUserLoveReacts = createAsyncThunk(
  "CollectLoveReact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/love",
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

const rejectLove = createAsyncThunk(
  "loveReject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/reject",
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

const backLoveReact = createAsyncThunk(
  "loveReactBack",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/loveback",
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

const collectLoveReactInfo = createSlice({
  name: "collectLoveReact",
  initialState: {
    loading: true,
    lovedata: [
      
    ],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(collectUserLoveReacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(collectUserLoveReacts.fulfilled, (state, action) => {
        state.lovedata = action.payload;
        state.loading = false;
      })
      .addCase(collectUserLoveReacts.rejected, (state, action) => {
        
        state.loading = false;
        state.error = true;
      })
      .addCase(rejectLove.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(rejectLove.fulfilled, (state, action) => {
      
        state.loading = false;
      })
      .addCase(rejectLove.rejected, (state, action) => {
      
        state.loading = false;
        state.error = true;
      })
      .addCase(backLoveReact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(backLoveReact.fulfilled, (state, action) => {
      
        state.loading = false;
      })
      .addCase(backLoveReact.rejected, (state, action) => {
      
        state.loading = false;
        state.error = true;
      });
  },
  reducers: {
    deleteData: (state, action) => {
      const arr = [];
      for (let i = 0; i < state.lovedata.length; i++) {
        if (action.payload != state.lovedata[i]._id) {
          arr.push(state.lovedata[i]);
        } else {
          continue;
        }
      }
      state.lovedata = arr;
    },
  },
});
export const { deleteData } = collectLoveReactInfo.actions;
export { collectUserLoveReacts, rejectLove, backLoveReact };
export default collectLoveReactInfo;
