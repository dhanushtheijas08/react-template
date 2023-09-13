import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
};
const reducer1 = createSlice({
  name: "reducer1",
  initialState,
  reducers: {
    createName(state, action) {
      state.name = action.payload;
    },
    createAge(state, action) {
      state.age = action.payload;
    },
  },
});
export default reducer1;
