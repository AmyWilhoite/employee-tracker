SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;

-- view all departments

-- view all roles

-- view all employees

-- add department

-- add role

-- add employee

-- update employee

-- 