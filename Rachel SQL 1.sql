SELECT OrderID,
    c.CompanyName AS "Customer Company",
    c.ContactName AS "Customer Contact",
    CONCAT(e.TitleOfCourtesy, " ", e.FirstName, " ", e.LastName) AS "Employee Name",
    e.Country AS "Employee Country",
    s.CompanyName AS "Shipping Country",
    Freight AS "Shipping Cost",
    ShipCity AS "Destination City",
    ShipCountry AS "Destination Country"
FROM Orders o
    INNER JOIN Customers c
        ON c.CustomerID = o.CustomerID
    INNER JOIN Shippers s
        ON s.ShipperID = o.ShipVia
    INNER JOIN (SELECT EmployeeID,
                        TitleOfCourtesy,
                        FirstName,
                        LastName,
                        Country
                    FROM Employees
                    WHERE Country = "USA") e
        ON e.EmployeeID = o.EmployeeID
WHERE Freight > 50
ORDER BY OrderID;