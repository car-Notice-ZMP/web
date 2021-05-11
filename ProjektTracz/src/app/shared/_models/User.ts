export class User {
  id: string;
  name: string;
  email: string;
  admin: string;
  email_verified_at: string;
  avatar: string;
  created_at: string;
  updated_at: string;

  constructor(id: string,
              name: string,
              email: string,
              admin: string,
              email_verified_at: string,
              avatar: string,
              created_at: string,
              updated_at: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.admin = admin;
    this.email_verified_at = email_verified_at;
    this.avatar = avatar;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
