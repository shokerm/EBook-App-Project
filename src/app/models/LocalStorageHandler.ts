import { LocalStorageKey } from "./enums";
import { UserResponse } from "../interfaces/loginUsersModel";

export class LocalStorageHandler {
    constructor() { }
    static saveUserResToLocalStorage(args: UserResponse) {
        localStorage.setItem(LocalStorageKey.id, args.id);
        localStorage.setItem(LocalStorageKey.token, args.token);
        localStorage.setItem(LocalStorageKey.refershToken, args.refreshToken);
        localStorage.setItem(LocalStorageKey.user, JSON.stringify(args));
    }
    static saveToLocalStorage(key: LocalStorageKey, value: any) {
        localStorage.setItem(key, value);
    }
    static getFromLocalStorage(key: LocalStorageKey) {
        return localStorage.getItem(key);
    }

    static getUserIdFromLocalStorage() {
        return localStorage.getItem(LocalStorageKey.id);
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


    static deleteAllLocalStoreage() {
        localStorage.removeItem(LocalStorageKey.id);
        localStorage.removeItem(LocalStorageKey.token);
        localStorage.removeItem(LocalStorageKey.refershToken);
        localStorage.removeItem(LocalStorageKey.currentUserName);
        localStorage.removeItem(LocalStorageKey.user);
    }
}