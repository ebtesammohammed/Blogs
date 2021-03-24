import { Query } from "./index";

const insert = (name: string, email: string) => Query(`
insert into authors (name, email)
values(?, ?)`, [name, email]);

export default {
    insert
}