import { legacy_createStore as CreateStore, combineReducers } from "redux";
import { counterReducers } from "../Reducers/CounterReducer";

const rootReducer = combineReducers({
  counter: counterReducers,
});
export const Store = CreateStore(rootReducer);
