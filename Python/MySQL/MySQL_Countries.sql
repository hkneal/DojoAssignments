-- Number 1
SELECT  countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE language = 'Slovene'
ORDER BY percentage desc;
-- Number 2
SELECT countries.name, COUNT(cities.id) AS City_count
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY City_count desc;
-- Number 3
SELECT cities.name, cities.population
FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = 'Mexico' AND cities.population > 500000
ORDER BY cities.population desc;
-- Number 4
SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage desc;
-- Number 5
SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;
-- Number 6
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = 'Constitutional Monarchy' AND countries.capital > 200 AND countries.life_expectancy > 75;
-- Number 7
SELECT countries.name AS Country_Name, cities.name AS City_Name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000;
-- Number 8
SELECT countries.region, COUNT(countries.region) AS Num_Countries
FROM countries
GROUP BY countries.region
ORDER by Num_Countries desc;
