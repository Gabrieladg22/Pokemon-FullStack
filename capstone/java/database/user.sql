-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER pokemon_appuser
WITH PASSWORD 'pikachu!';

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO pokemon_appuser;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO pokemon_appuser;
