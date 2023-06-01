
export interface UserLoginForRequset {
    email: string,
    password: string
}

export interface UserTokenResponse {
    id: string,
    token: string
    refreshToken: string
}

