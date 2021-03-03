// tslint:disable-next-line:class-name
export class Register {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;


  constructor(username, email, password, passwordConfirmation) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }
}
