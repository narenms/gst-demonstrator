const initState = [{ name: "Pen", price: "100", gstSlab: "5", gstPrice: "105" }]
const itemReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state.value, action.payload];
    default:
      return state;
  }
}

export default itemReducer;