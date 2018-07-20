CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  password VARCHAR(20), 
  profile_pic TEXT
); 

CREATE TABLE posts (
id SERiAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users (id)
);

INSERT INTO users 
(username, password, profile_pic)
values 
('Tom', 'loveforjerry', 'https://vignette.wikia.nocookie.net/tomandjerry/images/6/65/20140211071529%21Tom_Tom_and_Jerry.png/revision/latest?cb=20140529170742');

INSERT INTO posts
(title, img, content, author_id)
VALUES
('Paradise', 'http://4.bp.blogspot.com/-D5AL0X9gZn4/Un-GgIVtOsI/AAAAAAAABgY/avpJGeV91oU/s1600/de35_CasanovaCa.JPG', 'I hope to be like this one day', 1);


