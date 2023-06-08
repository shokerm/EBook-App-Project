import { LocalStorageKey } from "./enums";
import { UserResponse } from "./loginUsersModel";

export class LocalStorageHandler {
    constructor() { }
    static saveUserResToLocalStorage(args: UserResponse) {
        localStorage.setItem(LocalStorageKey.id, args.id);
        localStorage.setItem(LocalStorageKey.token, args.token);
        localStorage.setItem(LocalStorageKey.refershToken, args.refreshToken);
    }
}