import React from 'react';
import {Button, Input} from '../../StylesComponents/Button';
import {colors} from '../../StylesComponents/Colors';
import {
    CardWrapper, ErrorWrapper,
    FormWrapper,
    RememberMeWrapper,
    TextAuthWrapper,
    TitleAuthWrapper
} from "../../StylesComponents/AuthCardWrapper";
import {IsLoginRedirect} from "../../../UtilsFunction/RedirectFunction";
import {useFormik} from "formik";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {LoginTC} from "../../../Thunk's/Auth-Thunk";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../UtilsFunction/const-enum-path";
import styled from "styled-components";

type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
};

export const Login = IsLoginRedirect(() => {

    const dispatch = useTypedDispatch();

    const loginForm = useFormik({
        initialValues: {email: "", password: "", rememberMe: false, captcha: true},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Invalid password";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(LoginTC(values))
            loginForm.resetForm();
        },
    });

    return (
        <CardWrapper width={413} height={600}>
            <TitleAuthWrapper fontSz={26}>Sign In</TitleAuthWrapper>
            <TitleAuthWrapper fontSz={15}>It-incubator</TitleAuthWrapper>

            {/*formik*/}
            <FormWrapper height={300} onSubmit={loginForm.handleSubmit}>
                <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextAuthWrapper>
                <Input type="email"
                       id="email"
                       placeholder="email"
                       {...loginForm.getFieldProps("email")}/>
                {/*Errors */}
                {loginForm.touched.email && loginForm.errors.email ? (
                    <ErrorWrapper>{loginForm.errors.email}</ErrorWrapper>
                ) : null}
                {/*End errors*/}
                <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextAuthWrapper>
                <Input type="password"
                       id="password"
                       placeholder="password"
                       {...loginForm.getFieldProps("password")}/>

                {loginForm.touched.password && loginForm.errors.password ? (
                    <ErrorWrapper>{loginForm.errors.password}</ErrorWrapper>
                ) : null}
                <RememberMeWrapper>
                    <StyledCheckBox
                        type="checkbox"
                        id="remember"
                        {...loginForm.getFieldProps("rememberMe")}
                    />
                    <TextAuthWrapper fontSz={13} opacity={1} color={colors.DarkBlue}> Remember me</TextAuthWrapper>
                </RememberMeWrapper>


                {/*redirect in Forgot Password */}
                <TextAuthWrapper textAlign={'end'} color={colors.DarkBlue} fontSz={14}>
                    <NavLink to={PATH.forgotPassword}>Forgot Password</NavLink>
                </TextAuthWrapper>

                <Button type="submit"
                        disabled={!(loginForm.isValid && loginForm.dirty)}
                        height={36} width={266} bgColor={colors.DarkBlue}
                        color={colors.Lavender}>Login</Button>
                {/*formik*/}
            </FormWrapper>

            {/*redirect in Registration*/}
            <TextAuthWrapper color={colors.DarkBlue} textAlign={'center'} fontSz={14} opacity={0.5}>
                <ButtonHovered>
                    <NavLink to={PATH.registration}>Don’t have an account?</NavLink>
                </ButtonHovered>
            </TextAuthWrapper>

        </CardWrapper>
    )
});


const StyledCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ButtonHovered = styled.div`
  border-radius: 20px;
  width: 200px;
  margin: 0 auto;
  padding: 5px 10px;

  &:hover {
    transition: 1s all;
    background-color: ${colors.LightPurpure};
  }
`;