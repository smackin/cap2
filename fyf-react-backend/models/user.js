'use strict';

const db = require('../db');
const bcrypt = require('bcrypt');
const { sqlForPartialUpdate } = require('../helpers/sql');
const { NotFoundError, BadRequestError, UnauthorizedError } = require('../expressError');

const { BCRYPT_WORK_FACTOR } = require('../config.js');

/** Related functions for users. */

class User {
	/** authenticate user with username, password.
   *
   * Returns { username, first_name, last_name, email, is_admin }
   *
   * Throws UnauthorizedError is user not found or wrong password.
   **/

	static async authenticate(username, password) {
		// try to find the user first
		const result = await db.query(
			`SELECT first_name,
                  last_name,
                  username,
                  password,
                  email,
                  state
          FROM users
          WHERE username = $1`,
			[ username ]
		);

		const user = result.rows[0];

		if (user) {
			// compare hashed password to a new hash from password
			const isValid = await bcrypt.compare(password, user.password);
			if (isValid === true) {
				delete user.password;
				return user;
			}
		}

		throw new UnauthorizedError('Invalid username/password');
	}

	/** Register user with data.
   *
   * Returns { username, first_name, last_name, email }
   *
   * Throws BadRequestError on duplicates.
   **/

	static async register({ username, password, first_name, last_name, email }) {
		const duplicateCheck = await db.query(
			`SELECT username
           FROM users
           WHERE username = $1`,
			[ username ]
		);

		if (duplicateCheck.rows[0]) {
			throw new BadRequestError(`Duplicate username: ${username}`);
		}

		const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

		const result = await db.query(
			`INSERT INTO users
           (username,
            password,
            first_name,
            last_name,
            email)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING username, first_name, last_name, email`,
			[ username, hashedPassword, first_name, last_name, email ]
		);

		const user = result.rows[0];

		return user;
	}

	/** Find all users.
   *
   * Returns [{ username, first_name, last_name, email }, ...]
   **/

	static async findAll() {
		const result = await db.query(
			`SELECT username,
        first_name,
        last_name,
        email,
        state
        FROM users
        ORDER BY username`
		);

		return result.rows;
	}

	/** Given a user_id, return data about user.
   *
   * Returns { username, first_name, last_name }
   *
   * Throws NotFoundError if user not found.
   **/

	static async findUserById(user_id) {
		const userRes = await db.query(
			`SELECT username,
                  first_name,
                  last_name,
                  email,
                  state
           FROM users
           WHERE user_id = $1`,
			[ user_id ]
		);

		const user = userRes.rows[0];

		if (!user) throw new NotFoundError(`No user: ${user_id}`);

		return user;
	}

	/** Update user data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include:
   *   { first_name, last_name, password, email }
   *
   * Returns { username, first_name, last_name, email }
   *
   * Throws NotFoundError if not found.
   *
   * WARNING: this function can set a new password or make a user an admin.
   * Callers of this function must be certain they have validated inputs to this
   * or a serious security risks are opened.
   */

	static async update(username, data) {
		if (data.password) {
			data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
		}

		const { setCols, values } = sqlForPartialUpdate(data, {
			first_name: 'first_name',
			last_name: 'last_name'
		});
		const usernameVarIdx = '$' + (values.length + 1);

		const querySql = `UPDATE users 
                      SET ${setCols} 
                      WHERE username = ${usernameVarIdx} 
                      RETURNING username,
                                first_name,
                                last_name,
                                email`;
		const result = await db.query(querySql, [ ...values, username ]);
		const user = result.rows[0];

		if (!user) throw new NotFoundError(`No user: ${username}`);

		delete user.password;
		return user;
	}

	/** Delete given user from database; returns undefined. */

	static async remove(username) {
		let result = await db.query(
			`DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
			[ username ]
		);
		const user = result.rows[0];

		if (!user) throw new NotFoundError(`No user: ${username}`);
	}
}

module.exports = User;
