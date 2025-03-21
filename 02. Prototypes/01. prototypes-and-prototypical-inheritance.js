let user = {
    firstName: "Hasindu",
    lastName: "Lakshan",
    email: "Hasindu@emali.com",
    isActive: true,

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    login() {
        console.log(`${this.email} is logged in`);
    },

    logout() {
        console.log(`${this.email} is logged out`);
    }
};


let admin = {
    __proto__: user, // Inherits all properties & methods from user (Prototypal Inheritance)
    isAdmin: true,
    manageUsers() {
        console.log(`${this.fullName} is managing users`);
    }
};

let guest = {
    __proto__: user, // Same as admin
    isGuest: true,
    browseContent() {
        console.log(`${this.fullName} is managing users`);
    }
};

let superAdmin = {
    __proto__: admin, // Prototypical chain: superAdmin -> admin -> user
    manageAdmins() {
        console.log(`${this.fullName} is managing admins`);
    }
}

admin.fullName = "System Admin";
console.log(admin.fullName); // System Admin
console.log(user.fullName); // Hasindu Lakshan

