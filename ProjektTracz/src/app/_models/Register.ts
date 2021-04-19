// tslint:disable-next-line:class-name
export class Register {
  name: string;
  email: string;
  password: string;
  // tslint:disable-next-line:variable-name
  password_confirmation: string;


  // tslint:disable-next-line:variable-name
  constructor(name, email, password, password_confirmation) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
