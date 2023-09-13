import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    reducer1,
    reducer2,
  },
});

export default store;
