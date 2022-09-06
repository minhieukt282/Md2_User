import * as input from 'readline-sync'
import {User} from "./user";
import {Admin} from "./admin";
import {Manager} from "./manager";

let manager = new Manager()
let userNumbers: number = +input.question("so luong user: ")
let admin = new Admin()

for (let i: number = 1; i <= userNumbers; i++) {
    let user: any = []
    let name = input.question("Nhap ten User " + i + ": ")
    let email = input.question("nhap email User " + i + ": ")
    user.push(name, email)
    manager.addUser(user)
}
console.log(manager.showListUser())

admin.UName = input.question("Nhap ten Admin: ")
admin.UEmail = input.question("Email: ")
manager.addAdmin(admin)
console.log(manager.showListAdmin())




