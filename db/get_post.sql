SELECT * FROM users
INNER JOIN post ON post.author_id = users.user_id
WHERE post_id = $1;