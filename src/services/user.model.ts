export class User {
  public id?: number;
  public name?: string;
  public email?: string;

  constructor(name?: string, email?: string) {
    this.name = name;
    this.email = email;
  }
}
