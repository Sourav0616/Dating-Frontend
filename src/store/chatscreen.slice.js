import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getChatsSpecificUser = createAsyncThunk(
  "chats/getChats",
  async function (data, { rejectWithValue }) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/getchats",
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

const getSentChatsSpecificUser = createAsyncThunk(
  "sent/getChats",
  async function (data, { rejectWithValue }) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/chat",
        {
          userId: data.userId,
          loveId: data.loveId,
          message: data.message,
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

const chatScreenSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [
      {
        senderid: 1,
        message: "hello byujjh bjbuhujj uiyguijb uygb nudnf3f",
      },
      {
        senderid: 2,
        message: "hello ",
      },{
        senderid: 1,
        message: " uygb nudnf3f",
      },
      {
        senderid: 2,
        message: "hello hello byujjh bjbuhujj uiyguijb",
      },
    ],
    currentchatuser: {},
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getChatsSpecificUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getChatsSpecificUser.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    });
    builder.addCase(getChatsSpecificUser.rejected, (state, action) => {
      
    });
    builder.addCase(getSentChatsSpecificUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSentChatsSpecificUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getSentChatsSpecificUser.rejected, (state, action) => {
  
    });
  },
  reducers: {
    setCurrentUserChat: (state, action) => {
      state.currentchatuser = action.payload;
    },
    setMassage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export { getChatsSpecificUser, getSentChatsSpecificUser };
export const { setCurrentUserChat, setMassage } = chatScreenSlice.actions;
export default chatScreenSlice;
