DROP USER IF EXISTS coffeeadmin@localhost;

FLUSH PRIVILEGES;

CREATE USER coffeeadmin@localhost IDENTIFIED BY 'c0ff334d';
GRANT ALL PRIVILEGES ON coffeeShop.* TO coffeeadmin@localhost;