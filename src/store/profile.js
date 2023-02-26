import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    isLoogedIn: false,
  },
  reducers: {
    updateLoginState: (state, action) => {
      state.isLoogedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLoginState } = ProfileSlice.actions;

export default ProfileSlice.reducer;
