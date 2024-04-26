import { createStore } from "redux";
import counterReducer from "../Redux_services/reducers/reducers";
const store = createStore(counterReducer);
export default store;