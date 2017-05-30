-- Number 1
SELECT MONTHNAME(charged_datetime) AS month, SUM(amount) AS revenue
FROM billing
WHERE monthname(charged_datetime) = 'March' AND year(charged_datetime) = 2012
GROUP BY month;
-- Number 2
SELECT clients.client_id, SUM(amount) AS total_revenue
FROM clients
JOIN billing ON clients.client_id = billing.client_id
WHERE clients.client_id = 2;
-- Number 3
SELECT sites.domain_name, clients.client_id
FROM clients
JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 10;
-- Number 4
SELECT clients.client_id, COUNT(sites.domain_name) AS monthly_total, monthname(sites.created_datetime), year(sites.created_datetime)
FROM clients
JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 1
GROUP BY sites.domain_name;
-- ORDER BY (sites.created_datetime);
-- part B
SELECT clients.client_id, COUNT(sites.domain_name) AS monthly_total, monthname(sites.created_datetime), year(sites.created_datetime)
FROM clients
JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 20
GROUP BY sites.domain_name;
-- Number 5
SELECT sites.domain_name, COUNT(leads.site_id) AS number_of_leads, leads.registered_datetime AS date_generated
FROM sites
JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01'  AND '2011-02-15'
GROUP BY sites.domain_name;
-- Number 6
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.site_id) AS number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01'  AND '2011-12-31'
GROUP BY CONCAT(clients.first_name, ' ', clients.last_name)
ORDER BY clients.client_id;
-- Number 7
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(sites.domain_name) AS number_of_leads, monthname(leads.registered_datetime) AS month_generated
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01'  AND '2011-06-30'
GROUP BY leads.registered_datetime
ORDER BY leads.registered_datetime;
-- Number 8
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name AS website, COUNT(leads.site_id) AS number_of_leads, CONCAT(monthname(leads.registered_datetime), ' ', dayofmonth(leads.registered_datetime),
 ', ', year(leads.registered_datetime)) AS date_generated
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01'  AND '2011-12-31'
GROUP BY leads.site_id
ORDER BY clients.client_id;
-- Part B
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name AS website, COUNT(leads.site_id) AS number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
-- WHERE leads.registered_datetime BETWEEN '2011-01-01'  AND '2011-12-31'
GROUP BY leads.site_id
ORDER BY clients.client_id;
-- Number 9
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, SUM(billing.amount) AS total_revenue, monthname(billing.charged_datetime) AS month_charge, year(billing.charged_datetime) AS year_charge
FROM clients
JOIN billing ON clients.client_id = billing.client_id
GROUP BY clients.client_id, year(billing.charged_datetime), monthname(billing.charged_datetime)
ORDER BY clients.client_id;
-- Number 10
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, GROUP_CONCAT(sites.domain_name SEPARATOR ' / ') AS sites
FROM clients
JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id
ORDER BY clients.client_id;

