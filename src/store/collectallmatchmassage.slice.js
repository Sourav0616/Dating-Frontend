import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userMassageMatch = createAsyncThunk(
  "CollectMassage",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/getuserallmatchmassage",
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

const collectUserMassageProfiles = createSlice({
  name: "collectMassage",
  initialState: {
    loading: true,
    massagedata: [
      
    ],
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(userMassageMatch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userMassageMatch.fulfilled, (state, action) => {
        state.massagedata = action.payload;
        state.loading = false;
      })
      .addCase(userMassageMatch.rejected, (state, action) => {
      
        state.loading = false;
        state.error = true;
      });
  },
});

export { userMassageMatch };
export default collectUserMassageProfiles;
