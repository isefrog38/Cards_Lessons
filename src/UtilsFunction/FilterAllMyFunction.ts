import {getAllPacksTC} from "../Thunk's/PacksThunk";
import {AppRootStateType} from "../Store-Reducers/Store";
import {setUserIdAC} from "../Store-Reducers/Packs-Reducer";

export const FilterAllMyFunction = (dispatch: any, getState: () => AppRootStateType) => {

    const {_id} = getState().AuthorizationReducer;

    if (getState().PacksReducer.packsType === 'My') {
        if (_id) {
            dispatch(dispatch(setUserIdAC({userId: _id})));
            dispatch(getAllPacksTC());
        }
    } else {
        dispatch(dispatch(setUserIdAC({userId: ""})));
        dispatch(getAllPacksTC());
    }
};
