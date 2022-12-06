import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";

const INITIAL_STATE = {
  error: '',
  isLoading: false,
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [],
  aliases: [],
  father: '',
  mother: '',
  spouse: '',
  infosPersonagem: false,
};

const gotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED: return {
      ...state,
      isLoading: true,
    };
    case REQUEST_SUCCESSFUL: return {
      ...state,
      name: action.data.name,
      gender: action.data.gender,
      culture: action.data.culture,
      born: action.data.born,
      died: action.data.died,
      titles: [...action.data.titles],
      aliases: [...action.data.aliases],
      father: action.data.father,
      mother: action.data.mother,
      spouse: action.data.spouse,
      isLoading: false,
      infosPersonagem: true,
    };
    case REQUEST_FAILED: return {
      ...state,
      isLoading: false,
      error: action.error,
    };
    default: return state;
  }
};

export default gotReducer;