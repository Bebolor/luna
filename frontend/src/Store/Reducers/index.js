const initialState = {
    token: null,
    restaurants: [],
    userData: [],
    singleRestaurant: [],
    reviewsByRestaurant: [],
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SIGNIN':
             return {...state, token: action.payload};
         case 'RESTAURANTS':
             return {...state, restaurants: action.payload};
         case 'USER_DATA':
             return {...state, userData: action.payload};
         case 'SINGLERESTAURANT':
             return {...state, singleRestaurant: action.payload};
         default:
             return state;
     }
}

export default reducer;
