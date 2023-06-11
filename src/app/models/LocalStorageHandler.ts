import { LocalStorageKey } from "./enums";
import { UserResponse } from "./loginUsersModel";

export class LocalStorageHandler {
    constructor() { }
    static saveUserResToLocalStorage(args: UserResponse) {
        localStorage.setItem(LocalStorageKey.id, args.id);
        localStorage.setItem(LocalStorageKey.token, args.token);
        localStorage.setItem(LocalStorageKey.refershToken, args.refreshToken);
        localStorage.setItem(LocalStorageKey.isLogin, String(true));
    }
    static saveToLocalStorage(key: LocalStorageKey, value: any) {
        localStorage.setItem(key, value);
    }
    static getFromLocalStorage(key: LocalStorageKey) {
        return localStorage.getItem(key);
    }
    static getCurrentUserName() {
        return localStorage.getItem(LocalStorageKey.currentUserName);
    }
    static isUserNameIsExsit() {
        let userName = LocalStorageHandler.getFromLocalStorage(LocalStorageKey.currentUserName)
        if (userName) {
            return true;
        } else {
            return false;
        }
    }

    static isUserLoggedIn() {
        let isUserLoggedIn = LocalStorageHandler.getFromLocalStorage(LocalStorageKey.isLogin);
        if (isUserLoggedIn) {
            return true;
        } else {
            return false;
        }
    }

    static deleteAllLocalStoreage() {
        localStorage.removeItem(LocalStorageKey.id);
        localStorage.removeItem(LocalStorageKey.token);
        localStorage.removeItem(LocalStorageKey.refershToken);
        localStorage.removeItem(LocalStorageKey.currentUserName);
        localStorage.removeItem(LocalStorageKey.isLogin);
    }
}