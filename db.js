'use strict';
/** Database setup for the application. */
require('dotenv').config();

const { Pool } = require('pg');
const { getDatabaseUri } = process.env.DATABASE_URL || require('./config');
let db;

if (process.env.NODE_ENV === 'production') {
	db = new Pool({
		connectionString: process.env.DATABASE_URL || getDatabaseUri(),
		ssl: {
			rejectUnauthorized: false
		}
	});
} else {
	db = new Pool({
		connectionString: getDatabaseUri()
	});
}

db.connect();

module.exports = db;
