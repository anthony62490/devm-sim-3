CREATE TABLE ContractStatusEnum (
    id              SERIAL PRIMARY KEY,
    description         VARCHAR(4000) NOT NULL);

DO $$ BEGIN

    IF NOT EXISTS (SELECT * FROM ContractStatusEnum WHERE id = 1) THEN
    INSERT INTO ContractStatusEnum (id, description) VALUES
        (1, 'Ordered'),
        (2, 'Active'),
        (3, 'Stopped'),
        (4, 'Canceled'),
        (10, 'Inactive');
    END IF;
END $$

DO $$ BEGIN

    IF NOT EXISTS (SELECT * FROM ContractStatusEnum WHERE id = 1) THEN
    INSERT INTO ContractStatusEnum (id, description) VALUES
        (1, 'Ordered'),
        (2, 'Active'),
        (3, 'Stopped'),
        (4, 'Canceled'),
        (10, 'Inactive');
    END IF;
END $$
;

CREATE TABLE ContractStatusEnum (
    id              SERIAL PRIMARY KEY,
    description         VARCHAR(4000) NOT NULL
);

    -- File 2

 INSERT INTO ContractStatusEnum (id, description) VALUES 
     (1, 'Ordered'),
     (2, 'Active'),
     (3, 'Stopped'),
     (4, 'Canceled'),
     (10, 'Inactive');

SELECT * FROM pg_catalog.pg_tables LIMIT 10;

SELECT 'Relation Name',age(c.relfrozenxid) c_age, age(t.relfrozenxid) t_age,
       greatest(age(c.relfrozenxid),age(t.relfrozenxid)) as age
FROM pg_class c
LEFT JOIN pg_class t ON c.reltoastrelid = t.oid
WHERE c.relkind IN ('r', 'm')
order by age desc limit 5;