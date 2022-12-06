import fetchAPIGOT from "../../services/gotApi";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data) => ({
  type: REQUEST_SUCCESSFUL,
  data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const fetchGotData = (characterId) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await fetchAPIGOT(characterId);
      console.log(data)
      return dispatch(requestSuccessful(data));
    } catch (error) {
      return dispatch(requestFailed(error));
    }
  }
};