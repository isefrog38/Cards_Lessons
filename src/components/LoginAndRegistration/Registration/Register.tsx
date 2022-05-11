import React from 'react';
import {ButtonWrapper, CardWrapper, ErrorWrapper, FormWrapper, TextAuthWrapper, TitleAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {Button, Input} from "../../StylesComponents/Button";
import {colors} from "../../StylesComponents/Colors";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../UtilsFunction/const-enum-path";
import {RegisterTC} from "../../../Thunk's/PasswordandEmailThunk";


type FormikErrorType = {
    email?: string;
    password?: string;
    configPassword?: string
};

export const Register = () => {
    const dispatch = useTypedDispatch();

    const registrationForm = useFormik({
        initialValues: {email: "", password: "", configPassword: ""},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
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
            dispatch(RegisterTC(values.email, values.password))
            registrationForm.resetForm();
        },
    });
    return (
        <CardWrapper width={413} height={540}>

            <TitleAuthWrapper fontSz={26}>It-incubator</TitleAuthWrapper>
            <TitleAuthWrapper fontSz={22}>Sign Up</TitleAuthWrapper>
            {/*formik*/}
            <FormWrapper height={300} onSubmit={registrationForm.handleSubmit}>

                <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextAuthWrapper>
                <Input type="email"
                       id="email"
                       placeholder="email"
                       {...registrationForm.getFieldProps("email")}/>
                {/*Errors */}
                {registrationForm.touched.email && registrationForm.errors.email ? (
                    <ErrorWrapper>{registrationForm.errors.email}</ErrorWrapper>
                ) : null}

                <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextAuthWrapper>
                <Input type="password"
                       id="password"
                       placeholder="password"
                       {...registrationForm.getFieldProps("password")}/>

                {registrationForm.touched.password && registrationForm.errors.password ? (
                    <ErrorWrapper>{registrationForm.errors.password}</ErrorWrapper>
                ) : null}


                <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Config Password</TextAuthWrapper>
                <Input type="password"
                       id="configPassword"
                       placeholder="config password"
                       {...registrationForm.getFieldProps("configPassword")}/>

                {registrationForm.touched.configPassword && registrationForm.errors.configPassword ? (
                    <ErrorWrapper>{registrationForm.errors.configPassword}</ErrorWrapper>
                ) : null}

                <ButtonWrapper>
                    {/*button redirect in login*/}
                    <NavLink to={PATH.login}>
                        <Button height={36} width={124} bgColor={colors.Lavender} color={colors.DarkBlue}>
                            Go Login
                        </Button>
                    </NavLink>
                    <Button type="submit"
                            disabled={!(registrationForm.isValid && registrationForm.dirty)}
                            height={36} width={187} bgColor={colors.Blue} color={colors.Lavender}>Register</Button>
                </ButtonWrapper>
            </FormWrapper>
            {/*formik*/}
        </CardWrapper>
    )
}
