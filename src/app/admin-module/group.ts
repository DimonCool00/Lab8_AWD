export class Group {
  id: number;
  gname: string;
  users: string;
  constructor(id: number,
              gname: string,
              users: string) {
    this.id = id;
    this.gname = gname;
    this.users = users;
  }
}
