SELECT username, profile_pic, title FROM users
INNER JOIN posts
ON users.id = posts.author_id
WHERE NOT users.id = $1 
AND title = $2;