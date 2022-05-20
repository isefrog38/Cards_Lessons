import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/ComponentsForWorkingWithLogin/ErrorPage/Error404";
import {Login} from './components/LoginAndRegistration/Login/Login';
import {NewPassword} from './components/ComponentsForWorkingWithLogin/NewPassword/NewPassword';
import {ForgotPassword} from './components/ComponentsForWorkingWithLogin/ForgotPassword/ForgotPassword';
import {Register} from "./components/LoginAndRegistration/Registration/Register";
import {CheckEmail} from "./components/ComponentsForWorkingWithLogin/CheckEmail/CheckEmail";
import {TypedDispatch, useAppSelector} from "./Store-Reducers/Store";
import {AppInitialStateType} from "./Store-Reducers/App-Reducer";
import {Loading} from "./components/Common/Loading/Loading";
import {useDispatch} from "react-redux";
import {AuthMeTC} from "./Thunk's/Auth-Thunk";
import {PATH} from "./UtilsFunction/const-enum-path";
import {AppWrapper} from "./components/StylesComponents/AuthCardWrapper";
import { Header } from './components/Header/Header';
import {PacksList} from "./components/ProfileGeneral/PacksList/PacksList";
import { Profile } from './components/ProfileGeneral/Profile/Profile';
import {CardsPage} from "./components/CardsPage/CardsPage";
import {LearnPackModal} from "./components/ModalWindow/LearnPackModal/LearnPackModal";
import {Snackbar} from "./components/Common/SnackBar/SnackBar";

export const App = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const isAuth = useAppSelector<boolean>(state => state.AuthorizationReducer.isAuth);
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        dispatch(AuthMeTC());
    }, []);

    return (
        <AppWrapper>
            {stateApp.status === 'loading'
                ? <Loading/>
                : <>
                    {isAuth && <Header/>}
                    <Snackbar/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.profile}/>}/>
                        <Route path={PATH.login} element={<Login/>}/>
                        <Route path={PATH.registration} element={<Register/>}/>
                        <Route path={PATH.profile} element={<Profile/>}/>
                        <Route path={PATH.packsList} element={<PacksList/>}/>
                        <Route path={PATH.error} element={<Error404/>}/>
                        <Route path={PATH.forgotPassword} element={<ForgotPassword/>}/>
                        <Route path={PATH.newPassword + "/:token"} element={<NewPassword/>}/>
                        <Route path={PATH.checkEmail} element={<CheckEmail/>}/>
                        <Route path={PATH.cardsPack + `/:packId`} element={<CardsPage/>}/>
                        <Route path={PATH.learnPack + `/:packId`} element={<LearnPackModal />}/>
                    </Routes>
                </>
            }
        </AppWrapper>
    )
};