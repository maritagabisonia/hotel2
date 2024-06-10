export class RegisterUser {
    email: string;
    password: string;
    avatar: string;
    name: string;
    phoneNumber: string;
    gender: number;

    constructor(email: string = "",
        password: string = "",
        avatar: string = "",
        name: string = "",
        phoneNumber: string = "",
        gender: number = 0) {
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.gender = gender;

    };
}