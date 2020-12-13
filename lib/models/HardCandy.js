const pool = require('../utils/pool');

module.exports = class HardCandy {
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
        'INSERT INTO hard_candy (type, description, name ) VALUES ($1, $2, $3) RETURNING *',
        [type, description, name]
      );
      return new HardCandy(rows[0]);
    } 

    static async find() {
      const { rows } = await pool.query('SELECT * FROM hard_candy');
      return rows.map(row => new HardCandy(row));
    }

    static async findById(id) {
      const { rows } = await pool.query( 
        'SELECT * FROM hard_candy WHERE id=$1',
        [id]
      );
      if(!rows[0]) throw new Error(`no hard_candy with the id ${id}`);
      return new HardCandy(rows[0]);
    }

    static async update(id, { type, description, name }) {
      const { rows } = await pool.query(
        `UPDATE hard_candy
              SET type=$1,
                description=$2,
                name=$3
            WHERE id=$4
            RETURNING *
            `,
        [type, description, name, id]
      );
      return new HardCandy(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM hard_candy WHERE id=$1 RETURNING *',
        [id]
      );
      return new HardCandy(rows[0]);
    }
};
