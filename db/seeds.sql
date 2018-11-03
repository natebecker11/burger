USE burgers_db;

DELETE FROM burgers;

INSERT INTO burgers (burger_name, devoured) VALUES
('Whopper', true),
('Big Mac', true),
('Hardees Thickburger', false);

SELECT * FROM burgers;