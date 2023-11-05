import { combineReducers } from "redux";
import {  persistReducer  } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import post from "./post"

const reducers = combineReducers({
    post,
    // add more reducer
  })

  const config = {
    key: 'root',
    storage
}

export default persistReducer(config, reducers)