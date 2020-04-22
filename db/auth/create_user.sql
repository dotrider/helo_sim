INSERT INTO users
(username, password, profile_pic)
VALUES
($1, $2, $3);

SELECT user_id, username, profile_pic FROM users
WHERE username = $1;