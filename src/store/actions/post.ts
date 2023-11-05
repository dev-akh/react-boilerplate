
import { Dispatch } from 'redux';
import * as type from "../types";
import * as api from "../../services/api"

export const fetchPosts = () => async (dispatch: Dispatch) => {
    dispatch({
      type: type.POST,
    });
  
    const endpoint = api.API_ENDPOINTS.POSTS;
    try {
      const response = await api.get(endpoint);
        dispatch({
          type: type.POST_SUCCESS,
          payload: response,
        });
    } catch (error) {
      dispatch({
        type: type.POST_FAIL
      });
    }
};
  