import {User} from "./user";
import {Admin} from "./admin";

export class Manager {
    listUser: User[] = []
    listAdmin: Admin[] = []

    showListUser() {
        return this.listUser
    }

    showListAdmin() {
        return this.listAdmin
    }

    addUser(value: User) {
        this.listUser.push(value)
    }

    addAdmin(name: Admin) {
        this.listAdmin.push(name)
    }
}