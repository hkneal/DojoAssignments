-- Number 1
SELECT address.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE city.city_id = 312;
-- Number 2
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Comedy';
-- Number 3
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name), film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 5;
-- Number 4
SELECT store.store_id, address.city_id, customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN store ON customer.store_id = store.store_id
JOIN address ON customer.address_id = address.address_id
WHERE store.store_id = 1 AND (address.city_id = 1 or address.city_id = 42 or address.city_id = 312 or address.city_id = 459);
-- Number 5
SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = 15 AND film.rating = 'G' AND film.special_features LIKE ('%behind the scenes%');
-- Number 6
SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name)
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369;
-- Number 7
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99 AND category.name = 'Drama';
-- Number 8
SELECT actor.actor_id, concat(actor.first_name, ' ', actor.last_name), film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE concat(actor.first_name, ' ', actor.last_name) = 'SANDRA KILMER' AND category.name = 'Action';
 
