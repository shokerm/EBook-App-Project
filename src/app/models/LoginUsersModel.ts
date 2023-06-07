
export interface UserLoginForRequset {
    email: string,
    password: string
}

export interface UserResponse {
    id: string,
    token: string
    refreshToken: string
}

