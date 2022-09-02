import {
  NOTES_CREATE_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_REGISTER_FAIL,
  NOTES_REGISTER_REQUEST,
  NOTES_REGISTER_SUCCESS,
} from "../constants/notesConstants";
import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_REGISTER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({
      type: NOTES_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const createNoteAction = (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: NOTES_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer  ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `api/notes/create`,
        { title, content, category },
        config
      );

      dispatch({ type: NOTES_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: NOTES_CREATE_FAIL, payload: message });
    }
  };
