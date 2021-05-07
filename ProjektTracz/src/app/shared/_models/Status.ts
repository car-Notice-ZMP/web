export class Status{
  created_at: string;
  name: string;
  updated_at: string;

  constructor(created_at: string, name: string, updated_at: string) {
    this.created_at = created_at;
    this.name = name;
    this.updated_at = updated_at;
  }
}
