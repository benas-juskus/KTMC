-- 1. Kiek pardavėjų, produktų linijų ir produktų yra duomenų bazėje?

SELECT 
    COUNT(DISTINCT products.productVendor) AS Product_vendor,
    COUNT(DISTINCT productlines.productLine) AS Product_line_number,
    COUNT(DISTINCT products.productCode) AS Product_number
FROM products, productlines;

-- 2. Kokia yra vidutinė kaina (pirkimo kaina, MSRP) vienam pardavėjui?

SELECT 
    products.productVendor,
    AVG(products.buyPrice) AS AvgPrice,
    AVG(products.MSRP) AS AvgMSRP
FROM orderdetails
JOIN orders ON orders.orderNumber = orderdetails.orderNumber
JOIN products ON orderdetails.productCode = products.productCode
GROUP BY products.productVendor;


-- 3. Kokia yra vidutinė kaina (pirkimo kaina, MSRP) vienam klientui?

SELECT 
    orders.customerNumber,
    AVG(orderdetails.priceEach) AS AvgPrice,
    AVG(products.buyPrice) AS AvgBuyPrice,
    AVG(products.MSRP) AS AvgMSRP
FROM orderdetails
JOIN orders ON orders.orderNumber = orderdetails.orderNumber
JOIN products ON orderdetails.productCode = products.productCode
GROUP BY orders.customerNumber;


-- 4. Kokios prekės buvo parduota daugiausiai?

SELECT 
    products.productName,
    COUNT(orderdetails.quantityOrdered) AS prod_cnt
FROM orderdetails
JOIN orders ON orders.orderNumber = orderdetails.orderNumber
JOIN products ON products.productCode = orderdetails.productCode
GROUP BY products.productName
ORDER BY prod_cnt DESC
LIMIT 1;

-- 5. Kiek pinigų buvo uždirbta (tarp pirkimo kainos ir MSRP)?

SELECT
    SUM(orderdetails.quantityOrdered * products.MSRP) AS totalMSRP,
    SUM(orderdetails.quantityOrdered * products.buyPrice) AS totalBuyPrice,
    SUM(orderdetails.quantityOrdered * products.MSRP - orderdetails.quantityOrdered * products.buyPrice) AS totalSalesDifference
FROM orderdetails
JOIN products ON products.productCode = orderdetails.productCode;


-- 6. Kuris pardavėjas parduoda 1966 m. Shelby Cobra?

SELECT products.productVendor, products.productName
FROM products
WHERE products.productName LIKE '%1966%Shelby%Cobra%';

-- 7. Kuris pardavėjas parduoda daugiausiai produktų?

SELECT 
    products.productVendor,
    SUM(orderdetails.quantityOrdered) AS quantity
FROM products
JOIN orderdetails ON products.productCode = orderdetails.productCode
GROUP BY products.productVendor
ORDER BY quantity DESC
LIMIT 1;

-- 8. Kuris produktas yra pats brangiausias ir kuris pats pigiausias?

SELECT 
    MAX(products.MSRP) AS mostexp,
    MIN(products.MSRP) AS leastexp
FROM products;

-- 9. Kokių produktų yra daugiausiai sandėlyje?

SELECT 
    products.productName,
    products.quantityInStock
FROM products
JOIN (
    SELECT MAX(quantityInStock) AS maxQuantityInStock
    FROM products
) 
AS maxQuantitySubquery 
ON products.quantityInStock = maxQuantitySubquery.maxQuantityInStock;

-- 10. Išvardykite visus produktus, kurių sandėlyje yra mažiau nei 20.

SELECT products.productName, products.quantityInStock
FROM products
WHERE products.quantityInStock < 20;

-- 11. Kuris klientas turi didžiausią ir kuris mažiausią kredito limitą?

SELECT customers.customerNumber, customers.creditLimit AS HighestLimitLowestLimit
FROM customers
WHERE creditLimit = (SELECT MAX(customers.creditLimit) FROM customers)
UNION
SELECT customers.customerNumber, customers.creditLimit AS HighestLimitLowestLimit
FROM customers
WHERE creditLimit = (SELECT MIN(customers.creditLimit) FROM customers)
LIMIT 2;

-- 12. 12.customers in what city are the most profitable to the company? -- based on highest single payment

SELECT customers.city, customers.customerNumber, MAX(payments.amount)
FROM customers
JOIN payments ON customers.customerNumber = payments.customerNumber
GROUP BY customers.customerNumber
ORDER BY MAX(payments.amount) DESC
LIMIT 1;

-- 13. what is the average number of orders per customer?

SELECT (COUNT(orderNumber) / COUNT(DISTINCT customerNumber)) AS avgPerCust
FROM orders;

-- 14.who is the best customer? --based on single payment

SELECT 
    customers.customerName AS BestCustomer,
    MAX(payments.amount) AS amountPayed
FROM payments
JOIN customers ON customers.customerNumber = payments.customerNumber
GROUP BY BestCustomer
ORDER BY amountPayed DESC
LIMIT 1;
