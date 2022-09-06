export class User {
    protected name: string
    protected email: string

    constructor(name?: string, email?: string) {
        this.name = name
        this.email = email
    }

    get infoUser() {
        return this.name + " " + this.email
    }

    set UName(value: string) {
        this.name = value
    }

    set UEmail(value: string) {
        this.email = value
    }
}
