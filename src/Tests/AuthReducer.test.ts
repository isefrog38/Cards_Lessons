import {
    AuthorizationReducer,
    deleteUserDataAC,
    initialStateAuthorizationType,
    setAuthUserDataAC
} from "../Store-Reducers/Auth-Reducer";


let startState: initialStateAuthorizationType;

beforeEach(() => {

    startState = {
        _id: null,
        email: null,
        name: null,
        avatar: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
        error: null,
        isAuth: false
    };
})

test("Set auth users data in state", () => {

    let data = {
        _id: '626fddb118b7cd22a495df07',
        email: 'pavelKuh@gmail.com',
        name: 'pavelKuh@gmail.com',
        avatar: null,
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: null,
        isAuth: true,
        __v: 0,
        token: 'a00746f0-cb26-11ec-ba6e-6fe4df3b4ff4',
        tokenDeathTime: 1651623529567,
    }

    const action = setAuthUserDataAC(data);

    const endState = AuthorizationReducer(startState, action);

    expect(endState.isAuth).toBe(true);
    expect(endState._id).toBe('626fddb118b7cd22a495df07');
    expect(endState.email).toBe('pavelKuh@gmail.com');

});

test("Delete user profile data", () => {

    let data = {
        _id: null,
        email: null,
        name: null,
        avatar: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
        error: null,
        isAuth: false
    }

    const action = deleteUserDataAC(data);

    const endState = AuthorizationReducer(startState, action);

    expect(endState.isAuth).toBe(false);
    expect(endState._id).toBe(null);
    expect(endState.name).toBe(null);

});

