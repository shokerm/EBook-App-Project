import { LocalStorageKey } from "./Enums";

export class LocalStorageHandler {
    constructor() { }
    static Id: string = LocalStorageKey.Id;
    static Token: string = LocalStorageKey.Token;
    static SaveUserLoginToken(token: string) {
        localStorage.setItem(this.Token, token);
    }
}