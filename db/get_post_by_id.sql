SELECT u.username, p.id, p.img, p.title, p.content
FROM users u
JOIN posts p ON p.author_id = u.id
WHERE p.id = $1;