export default {
    mysql: {
        host: process.env.HOST,
        port: Number(process.env.DBPORT),
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
}