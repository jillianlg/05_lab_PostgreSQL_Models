const pool = require('../utils/pool');

module.exports = class Chocolate {
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
        'INSERT INTO chocolate (type, description, name ) VALUES ($1, $2, $3) RETURNING *',
        [type, description, name]
      );
      return new Chocolate(rows[0]);
    } 

    static async find() {
      const { rows } = await pool.query('SELECT * FROM chocolate');
      return rows.map(row => new Chocolate(row));
    }

    static async findById(id) {
      const { rows } = await pool.query( 
        'SELECT * FROM chocolate WHERE id=$1',
        [id]
      );
      if(!rows[0]) throw new Error(`no chocolate with the id ${id}`);
      return new Chocolate(rows[0]);
    }

    static async update(id, { type, description, name }) {
      const { rows } = await pool.query(
        `UPDATE chocolate
              SET type=$1,
                description=$2,
                name=$3
            WHERE id=$4
            RETURNING *
            `,
        [type, description, name, id]
      );
      return new Chocolate(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM chocolate WHERE id=$1 RETURNING *',
        [id]
      );
      return new Chocolate(rows[0]);
    }
};
