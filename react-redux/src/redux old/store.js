import { createStore, combineReducers } from "redux";
import reducer1 from "./reducerSlice1";
import reducer2 from "./reducerSlice2";

const rootReducer = combineReducers({
  reducer1,
  reducer2,
});
const store = createStore(rootReducer);
export default store;
