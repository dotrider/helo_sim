CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password TEXT NOT NULL,
    profile_pic TEXT
);

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT, 
    author_id INT REFERENCES users(user_id)
);