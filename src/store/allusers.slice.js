import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchData = createAsyncThunk("fetchData", async () => {
  const responce = await axios.get("http://localhost:8000/api/user/alluser");
  return responce.data;
});

const userDataSlice = createSlice({
  name: "allUserData",
  initialState: {
    loading: true,
    data: [],
    error: false,
    reload:true
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled,(state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
     
      state.loading = false;
      state.error = false;
    });
  },
});



export { fetchData };
export default userDataSlice;
