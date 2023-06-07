import { LocalStorageKey } from "./Enums";
import { UserResponse } from "./LoginUsersModel";

export class LocalStorageHandler {
    constructor() { }
    static SaveUserResToLocalStorage(args: UserResponse) {
        localStorage.setItem(LocalStorageKey.Id, args.id);
        localStorage.setItem(LocalStorageKey.Token, args.token);
        localStorage.setItem(LocalStorageKey.RefershToken, args.refreshToken);
    }
}