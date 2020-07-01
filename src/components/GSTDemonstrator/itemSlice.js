import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    value: [{ name: "Pen", price: "100", gstSlab: "5", gstPrice: "105" }],
  },
  reducers: {
    addNewItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload];
    },

    deleteItem: (state, action) => {
      state.value = state.value.filter(obj => obj.name !== action.payload)
    }
  },
});

export const { addNewItem, deleteItem } = itemSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addNewItemAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(addNewItem(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectItem = (state) => state.item.value;

export default itemSlice.reducer;