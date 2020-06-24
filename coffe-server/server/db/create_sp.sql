DROP PROCEDURE IF EXISTS getMainProducts;
DROP PROCEDURE IF EXISTS getExtraProducts;

DELIMITER $$

CREATE PROCEDURE getMainProducts()
BEGIN
    SELECT * FROM product WHERE type='principal';
END
$$

CREATE PROCEDURE getExtraProducts()
BEGIN
    SELECT * FROM product WHERE type='extra';
END
$$

DELIMITER ;