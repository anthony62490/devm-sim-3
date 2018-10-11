SELECT u.username, p.content
FROM users u
JOIN posts p ON p.author_id = u.id
WHERE u.id = $1;