export class UserContactDeatail {
    constructor(
        public firstName: string,
        public LastName: string,
        public Content: string,
        public Email: string,

    ) { }
}

export class loginUserForm {
    constructor(
        public Email: string,
        public Password: string

    ) { }
}

export class registerUserForm {
    constructor(
        public FirstName: string,
        public LastName: string,
        public Email: string,
        public Password: string

    ) { }
}

