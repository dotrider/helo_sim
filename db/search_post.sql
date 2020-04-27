SELECT post_id, title, img, content, author_id, user_id, username, profile_pic FROM post
INNER JOIN users ON post.author_id = users.user_id
WHERE title ILIKE $1;

