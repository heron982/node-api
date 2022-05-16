import mysql, { Connection } from 'mysql';

class Database {

    connection: Connection

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        });
    }
    //TODO usar mysql2!
    consulta(query: CallableFunction) {
        try {
            this.connection.connect(err => { throw err });
            query(this.connection);
            this.connection.end();
        } catch (err) {
            console.log(err)
        }
    }
}