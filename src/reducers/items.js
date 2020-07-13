import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { items: action.payload };
    case ADD_ITEM:
      return { items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
