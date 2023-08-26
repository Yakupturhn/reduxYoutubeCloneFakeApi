import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import homeReducer from "./reducers/HomeData";
import detailReducer from "./reducers/DetailData";
import searchReducer from "./reducers/SearchData";

let initialState = {};
let reducers = combineReducers({
  getVideos: homeReducer,
  getVideo: detailReducer,
  searchVideos: searchReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
