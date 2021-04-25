export class Register {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;


  constructor(name, email, password, password_confirmation) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
