const pool = require('../utils/pool');

module.exports = class Gummy {
    id;
    type;
    description;
    name;

    constructor(row) {
      this.id = row.id;
      this.type = row.type;
      this.description = row.description;
      this.name = row.name;
    }

    // CRUD methods
    static async insert({ type, description, name }) {
      const { rows } = await pool.query(
        'INSERT INTO gummy (type, description, name ) VALUES ($1, $2, $3) RETURNING *',
        [type, description, name]
      );
      return new Gummy(rows[0]);
    } 

    static async find() {
      const { rows } = await pool.query('SELECT * FROM gummy');
      return rows.map(row => new Gummy(row));
    }

    static async findById(id) {
      const { rows } = await pool.query( 
        'SELECT * FROM gummy WHERE id=$1',
        [id]
      );
      if(!rows[0]) throw new Error(`no gummy with the id ${id}`);
      return new Gummy(rows[0]);
    }

    static async update(id, { type, description, name }) {
      const { rows } = await pool.query(
        `UPDATE gummy
              SET type=$1,
                description=$2,
                name=$3
            WHERE id=$4
            RETURNING *
            `,
        [type, description, name, id]
      );
      return new Gummy(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM gummy WHERE id=$1 RETURNING *',
        [id]
      );
      return new Gummy(rows[0]);
    }
};
