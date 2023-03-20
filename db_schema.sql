PRAGMA foreign_keys=ON;
PRAGMA journal_mode=WAL;

BEGIN TRANSACTION;

DROP TABLE IF EXISTS records;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS records (
    user_id INTEGER,
    value INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO users (name,email,password)
VALUES ('Sharon Cummings',
        'lobortis.augue@protonmail.net',
        'LKN30EQL1SS'
        );

COMMIT;