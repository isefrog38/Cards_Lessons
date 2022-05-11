export type ResponseDataLoginOrAuthMe = {
    _id: string | null;
    email: string | null;
    name: string | null;
    avatar?: string | null;
    publicCardPacksCount: number | null;
    created: Date | null;
    updated: Date | null;
    isAdmin: boolean | null;
    verified: boolean | null; // подтвердил ли почту
    rememberMe: boolean | null;
    error?: string | null;
};

export type ChangeProfileResponseType = {
    updatedUser: ResponseDataLoginOrAuthMe
    error?: string
}

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
};


export type InfoErrorResponseType = {
    info: string
    error: string;
};

export type RegisterDataType = {
    email: string
    password: string
}

export type ResponseRegisterType = {
    addedUser: {}
    error?: string
}
export type ForgotPasswordDataType = {
    email: string
    from: string
    message: string
}
export type NewPasswordDataType = {
    password: string
    resetPasswordToken: string
}
export type NewNameAndAvatarType = {
    name: string
    avatar: string
}

export type ResponseUpdateDataType = {
    updatedUser: ResponseDataLoginOrAuthMe,
    error?: string
}