PRAGMA foreign_keys=ON;
PRAGMA journal_mode=WAL;

BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    password VARCHAR(100),
    UNIQUE (username)
);

-- INSERT INTO users (email,password)
-- VALUES ('georgehill010@gmail.com',
--         'password12345'
--         );

COMMIT;