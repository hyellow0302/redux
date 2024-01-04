import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: { value: { color: "yellow" } },
  reducers: {
    change: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
});

export const { change } = colorSlice.actions;
export default colorSlice.reducer;
