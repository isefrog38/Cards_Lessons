import React from 'react';
import {CardWrapper, ErrorWrapper, FormWrapper, TextAuthWrapper, TitleAuthWrapper} from '../../StylesComponents/AuthCardWrapper';
import {Button, Input} from "../../StylesComponents/Button";
import {colors} from "../../StylesComponents/Colors";
import {useFormik} from "formik";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import { useParams} from 'react-router-dom';
import { NewPasswordTC } from '../../../Thunk\'s/PasswordandEmailThunk';

type FormikErrorType = {
    password?: string
    configPassword?: string
}

export const NewPassword = () => {
    const dispatch = useTypedDispatch();
    const {token} = useParams<{ token: string }>()

    const NewPassword = useFormik({
        initialValues: {password: "", configPassword: ""},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 7) {
                errors.password = "Invalid password, min symbol length 7";
            }
            if (!values.configPassword) {
                errors.configPassword = "Config Password is required";
            } else if (values.configPassword !== values.password) {
                errors.configPassword = "Passwords do not match";
            }
            return errors;
        },
        onSubmit: (values) => {
            if (token)
                dispatch(NewPasswordTC(values.password, token))
            NewPassword.resetForm();
        },
    });


    return (
        <CardWrapper width={413} height={550}>
            <TitleAuthWrapper fontSz={26}>It-incubator</TitleAuthWrapper>
            <TitleAuthWrapper fontSz={22}>Create new password</TitleAuthWrapper>
            {/*formik*/}
            <FormWrapper height={300} onSubmit={NewPassword.handleSubmit}>
                <Input type="password"
                       id="password"
                       placeholder="password"
                       {...NewPassword.getFieldProps("password")}/>

                {NewPassword.touched.password && NewPassword.errors.password ? (
                    <ErrorWrapper>{NewPassword.errors.password}</ErrorWrapper>
                ) : null}

                <Input type="password"
                       id="configPassword"
                       placeholder="config password"
                       {...NewPassword.getFieldProps("configPassword")}/>

                {NewPassword.touched.configPassword && NewPassword.errors.configPassword ? (
                    <ErrorWrapper>{NewPassword.errors.configPassword}</ErrorWrapper>
                ) : null}

                <TextAuthWrapper opacity={0.5} color={colors.DarkBlue} fontSz={16}>Create new password and we will send you
                    further instructions to email</TextAuthWrapper>
                {/*<NavLink to={PATH.login}>*/}
                    <Button type={'submit'}
                            disabled={!(NewPassword.isValid && NewPassword.dirty)}
                            bgColor={colors.Blue} width={266} height={36} color={colors.Lavender}>Create new
                        password</Button>
                {/*</NavLink>*/}
            </FormWrapper>
            {/*formik*/}
        </CardWrapper>
    )
}

