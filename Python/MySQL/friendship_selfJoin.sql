-- INSERT INTO  users (id, first_name, last_name, created_at, updated_at)
-- VALUES(5, 'Bob', 'Johnson', Now(), Now());

-- SELECT * FROM users;
-- SELECT * FROM friendships;
-- 
-- INSERT INTO  friendships (id, created_at, updated_at, user_id, friend_id)
-- VALUES(9, Now(), Now(), 5, 2);
-- 
-- SELECT * 
-- FROM users;
-- 
-- SELECT * 
-- FROM friendships;
-- 
SELECT users.first_name, users.last_name, user2.first_name AS friend_first_name, user2.last_name AS friend_last_name 
-- SELECT * 
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as user2  ON friendships.friend_id = user2.id
ORDER BY friend_last_name;

