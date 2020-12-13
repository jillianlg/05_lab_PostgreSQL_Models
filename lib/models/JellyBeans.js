const pool = require('../utils/pool');

module.exports = class JellyBeans {
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
        'INSERT INTO jelly_beans (type, description, name ) VALUES ($1, $2, $3) RETURNING *',
        [type, description, name]
      );
      return new JellyBeans(rows[0]);
    } 

    static async find() {
      const { rows } = await pool.query('SELECT * FROM jelly_beans');
      return rows.map(row => new JellyBeans(row));
    }

    static async findById(id) {
      const { rows } = await pool.query( 
        'SELECT * FROM jelly_beans WHERE id=$1',
        [id]
      );
      if(!rows[0]) throw new Error(`no jelly_beans with the id ${id}`);
      return new JellyBeans(rows[0]);
    }

    static async update(id, { type, description, name }) {
      const { rows } = await pool.query(
        `UPDATE jelly_beans
              SET type=$1,
                description=$2,
                name=$3
            WHERE id=$4
            RETURNING *
            `,
        [type, description, name, id]
      );
      return new JellyBeans(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM jelly_beans WHERE id=$1 RETURNING *',
        [id]
      );
      return new JellyBeans(rows[0]);
    }
};
