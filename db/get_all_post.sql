SELECT * FROM post
INNER JOIN users ON post.author_id = users.user_id;