const initialStore = {
    currentUser: {}
};
 
export function UserLogInReducer(store = initialStore, action) {
    switch(action.type) {
        case "LOGIN_USER":
            return {...store, currentUser: action.payload};
        default: 
            return store;
    }
}
