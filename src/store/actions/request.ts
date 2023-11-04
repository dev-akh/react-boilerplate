
import axios from "axios";
import { Dispatch } from 'redux';
import * as type from "../types";
import * as api from "../../services/api"

export const fetchLeaveTypes = (userId : number) => async (dispatch: Dispatch) => {
    dispatch({
      type: type.LEAVE_TYPES,
    });
  
    const endpoint = api.API_ENDPOINTS.LEAVE_TYPES;

    try {
      const response = await axios.get(endpoint, {
          params: {
            userId: userId,
          }
      });
      if (response.data.success === true) {
        dispatch({
          type: type.LEAVE_TYPES_SUCCESS,
          payload: response.data.data,
        });
      } else {
        const notSuccessData = {
          statusCode: response.status,
          message: response.data.message,
          success: response.data.success,
        };
        dispatch({
          type: type.LEAVE_TYPES_FAIL,
          payload: notSuccessData,
        });
      }
    } catch (error) {
      dispatch({
        type: type.LEAVE_TYPES_FAIL
      });
    }
};
  