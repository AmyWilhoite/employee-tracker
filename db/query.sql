SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;

-- create queries 

-- view all, add or edit departments
SELECT * 
FROM department
LEFT JOIN role
ON role.department_id = department.id

-- view all, add or edit roles

-- view all, add or edit employees

