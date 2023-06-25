export class UserUpdateDTO {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public authLevel: number

    ) { }
}
