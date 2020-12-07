CREATE TABLE candy (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type TEXT NOT NULL,
    description TEXT,
    url TEXT NOT NULL,
);

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
}

