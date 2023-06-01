export class LocalStorageHandler {
    constructor() { }
    static Id: string = "Id";
    static Token: string = "Token";
    static SaveUserLoginToken(token: string) {
        localStorage.setItem(this.Token, token);
    }
}