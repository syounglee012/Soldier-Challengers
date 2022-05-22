import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const GET_SEARCH = "GET_SEARCH";

const getSearch = createAction(GET_SEARCH, (challenges) => ({
  challenges,
}));

const initialState = {
  challenges: [{
    challengeCnt: 0,
    challengeEndDate:"",
    challengeLimitNum: 0,
    challengeNum: 0,
    challengeProgress: "",
    challengeTitle:"",
    challengeType: "",
    challengeViewCnt: 0,
    steps: [{
      stepNum: 0,
      isChecked:false,
      stepContent:"",
    },]
  },],
};

const searchDB = (keyword) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/search?keyword=${keyword}`,
      }).then((response) => {
        dispatch(getSearch(response));
      });
    } catch (err) {
      console.log(err);
      window.alert("입력하신 키워드와 관련된 챌린지가 없습니다");
    }
  };
};

export default handleActions(
  {
    [GET_SEARCH]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges = action.payload.challenges.data;
      }),
  },
  initialState
);

const ActionCreators = {
  searchDB,
};

export { ActionCreators };
