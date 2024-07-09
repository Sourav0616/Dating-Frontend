import { configureStore } from "@reduxjs/toolkit";

import userDataSlice from "./allusers.slice.js";
import userInfoSlice from "./userinfo.slice.js";
import userRegesterSlice from "./userregester.schema.js";
import currentUser from "./currentuser.slice.js";
import loveReact from "./userreact.slice.js";
import collectLoveReactInfo from "./collectlovereactinfo.slice.js";
import matchRequest from "./usermatch.slice.js";
import collectMatchRequestinfo from "./collectallmatchinfo.slice.js";
import matchedRequest from "./usermatch.slice.js";
import setMassageRequest from "./creatmassage.slice.js"
import collectUserMassageProfiles from "./collectallmatchmassage.slice.js"
import chatScreenSlice from "./chatscreen.slice.js";
import userBlogs from "./addblog.slice.js";
import userSocket from "./socket.slice.js";

const store = configureStore({
  reducer: {
    allUserData: userDataSlice.reducer,
    userInfo: userInfoSlice.reducer,
    userRegester: userRegesterSlice.reducer,
    currentUser: currentUser.reducer,
    loveReact: loveReact.reducer,
    collectLoveReact: collectLoveReactInfo.reducer,
    matchRequest: matchRequest.reducer,
    collectMatchRequest:collectMatchRequestinfo.reducer,
    matchRequest:matchedRequest.reducer,
    massageRequest :setMassageRequest.reducer,
    collectMassage:collectUserMassageProfiles.reducer,
    chat : chatScreenSlice.reducer,
    userblog : userBlogs.reducer,
    socket : userSocket.reducer
  },
});
export default store;
