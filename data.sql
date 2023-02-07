-- drop db if exists in order to run seed file
DROP DATABASE IF EXISTS fyfreactdb;

-- Create the db
CREATE DATABASE fyfreactdb;

-- Move into the db
\c fyfreactdb;


CREATE TABLE users
(
    "userID" serial   NOT NULL,
    "APIKey" int   NOT NULL,
    "Name" text   NOT NULL,
    "UserName" text   NOT NULL,
    "email" text   NOT NULL,
    "State" text   NOT NULL,
    -- CONSTRAINT "pk_user" PRIMARY KEY (
    --     "userID"
    -- )
);

CREATE TABLE parks 
(
    "parksid" serial   NOT NULL,
    "Name" text   NOT NULL,
    "location" int   NOT NULL,
    "url" text   NOT NULL,
    "activities" int   NOT NULL,
    -- CONSTRAINT "pk_parks" PRIMARY KEY (
    --     "parksid"
    -- )
);

CREATE TABLE activities 
(
    "activityID" serial   NOT NULL,
    "name" text   NOT NULL,
    "location" text   NOT NULL,
    "parksid" int   NOT NULL,
    -- CONSTRAINT "pk_activities" PRIMARY KEY (
    --     "activityID"
    -- )
);

CREATE TABLE favorites 
(
    "faveID" serial   NOT NULL,
    "userID" int   NOT NULL,
    "parksid" int   NOT NULL,
    -- CONSTRAINT "pk_favorites" PRIMARY KEY (
    --     "faveID"
    -- )
);

-- ALTER TABLE "activities" ADD CONSTRAINT "fk_activities_parksid" FOREIGN KEY("parksid")
-- REFERENCES "parks" ("parksid");

-- ALTER TABLE "favorites" ADD CONSTRAINT "fk_favorites_parksid" FOREIGN KEY("parksid")
-- REFERENCES "parks" ("parksid");

-- ALTER TABLE "favorites" ADD CONSTRAINT "fk_favorites_userID" FOREIGN KEY("userID")
-- REFERENCES "user" ("userID");

-- CREATE INDEX "idx_user_Name"
-- ON "user" ("Name");
