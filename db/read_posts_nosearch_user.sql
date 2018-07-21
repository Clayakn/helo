SELECT username, profile_pic, title FROM users
INNER JOIN posts
ON users.id = posts.author_id
