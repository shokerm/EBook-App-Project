import { LocalStorageKey } from "./Enums";

export class LocalStorageHandler {
    constructor() { }
    static SaveUserLoginToken(token: string) {
        localStorage.setItem(LocalStorageKey.Token, token);
    }
}