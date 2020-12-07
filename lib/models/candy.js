const pool = require('../utils/pool');

module.exports = class Candy {
    id;
    type;
    description;
    url;

    constructor(row) {
      this.id = row.id;
      this.type = row.type;
      this.description = row.description;
      this.url = row.url;
    }

    // CRUD methods
    static async insert({ type, description, url }) {
      const { rows } = await pool.query(
        'INSERT INTO candy (type, description, url ) VALUES ($1, $2, $3) RETURNING *',
        [type, description, url]
      );
      return new Candy(rows[0]);
    }
};





