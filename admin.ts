import {User} from "./user";

export class Admin extends User {
    private role: number

    constructor(name?:string, email?:string, role?: number) {
        super(name, email);
        this.role = role
    }

    get infoAdmin() {
        return "Hello Admin: " + this.name + " " + this.email
    }
}

