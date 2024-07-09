import { createSlice } from "@reduxjs/toolkit";


const userSocket = createSlice({
  name: "socket",
  initialState: {
    socket: "",
    user: "",
  },
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});
export const { setSocket } = userSocket.actions;

export default userSocket;
