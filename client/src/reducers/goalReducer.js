import { GET_GOALS, ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, GOALS_LOADING } from '../actions/types';

const initialState = {
  goals: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GOALS:
      return {
        ...state,
        goals: action.payload,
        loading: false
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload]
      };
    case UPDATE_GOAL:
      return {
        ...state,
        goals: state.goals.map(goal => {
          if(goal._id === action.payload._id) return action.payload;
          return goal;
        })
      };
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal._id !== action.payload)
      };
    case GOALS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  };
};
