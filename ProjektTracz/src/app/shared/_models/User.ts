export class User {
  name: string;
  email: string;
  email_verified_at: string;
  avatar: string;

  constructor(name: string,
              email: string,
              email_verified_at: string,
              avatar: string) {
    this.name = name;
    this.email = email;
    this.email_verified_at = email_verified_at;
    this.avatar = avatar;
  }
}
