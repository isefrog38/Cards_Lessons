import {
    AppInitialStateType,
    AppReducer,
    RequestStatusType,
    setAppErrorMessageAC,
    setAppStatusAC, setEmailAddressUserAC
} from "../Store-Reducers/App-Reducer";


let startState: AppInitialStateType;

beforeEach(() => {

    startState = {
        status: 'idle' as RequestStatusType,
        error: null,
        success: null,
        email: null,
    };
})

test("Set app status loading Page", () => {

    const action = setAppStatusAC({status: 'loading'});
    const action2 = setAppStatusAC({status: 'succeeded'});

    const endState = AppReducer(startState, action);
    const endState2 = AppReducer(startState, action2);

    expect(endState.status).toBe('loading');
    expect(endState2.status).toBe('succeeded');

});

test("Set global Error in App or Server", () => {

    const action = setAppErrorMessageAC({error: "Oshibka Bro"});
    const action2 = setAppErrorMessageAC({error: "No Error (or not)"});

    const endState = AppReducer(startState, action);
    const endState2 = AppReducer(startState, action2);

    expect(endState.error).toBe("Oshibka Bro");
    expect(endState2.error).toBe("No Error (or not)");

});

test("\"Set global Error in App or Server\"", () => {

    const action = setEmailAddressUserAC({email: "123@mail.ru"});
    const action2 = setEmailAddressUserAC({email: "7777@mail.ru"});

    const endState = AppReducer(startState, action);
    const endState2 = AppReducer(startState, action2);

    expect(endState.email).toBe("123@mail.ru");
    expect(endState2.email).toBe("7777@mail.ru");

});

