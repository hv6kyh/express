import * as mysql from 'mysql';
import * as config from '../../common/config';

const db = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});
db.connect();

module.exports = db;