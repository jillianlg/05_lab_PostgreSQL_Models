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
};

