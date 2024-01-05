// colorSlice.js 수정
import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: { value: { color: "yellow" } }, // value 프로퍼티가 없음
  reducers: {
    change(state, action) {
      state.value.color = action.payload;
    },
  },
});

export const { change } = colorSlice.actions;
export default colorSlice.reducer;
