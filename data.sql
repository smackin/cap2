-- drop db if exists in order to run seed file
DROP DATABASE IF EXISTS fyfreactdb;

-- Create the db
CREATE DATABASE fyfreactdb;

-- Move into the db
\c fyfreactdb;

CREATE TABLE "fyfreactapp_users" (
    "user_id" serial,   
    "apikey" int,   
    "users_name" text,   
    "username" text,   
    "password" text,   
    "email" text,   
    "state" text,   
    CONSTRAINT "pk_user" PRIMARY KEY (
        "user_id"
    )
);

CREATE TABLE "parks" (
    "parks_id" serial,
    "park_name" text,
    "location" int,
    "url" text,
    "activities" int,
    CONSTRAINT "pk_parks" PRIMARY KEY (
        "parks_id"
    )
);

CREATE TABLE "activities" (
    "activity_id" serial ,
    "activity_name" text ,
    "location" text  ,
    "parks_id" int  ,
    CONSTRAINT "pk_activities" PRIMARY KEY (
        "activity_id"
    )
);


CREATE TABLE "favorites" (
    "fave_id" serial  ,
    "user_id" int  ,
    "parks_id" int ,
    CONSTRAINT "pk_favorites" PRIMARY KEY (
        "fave_id"
    )
);

-- ALTER TABLE "activities" ADD CONSTRAINT "fk_activities_parks_id" FOREIGN KEY("parks_id")
-- REFERENCES "parks" ("parks_id");

ALTER TABLE "favorites" ADD CONSTRAINT "fk_favorites_parks_id" FOREIGN KEY("parks_id")
REFERENCES "parks" ("parks_id");

ALTER TABLE "favorites" ADD CONSTRAINT "fk_favorites_user_id" FOREIGN KEY("user_id")
REFERENCES "fyfreactapp_users" ("user_id");

CREATE INDEX "idx_users_Name"
ON "fyfreactapp_users" ("users_name");

INSERT INTO fyfreactapp_users (APIKey, users_name, userName, password, email, state) 
VALUES 
(1234567, 'Stephanie', 'stephtest', 'test123','steph@test.com', 'NJ'),
(2345678, 'Sammie', 'SamGirl', 'Squirrel12', 'squirrelluvr@doggie.com', 'LA' ),
(9876543, 'Polly', 'PollyG', 'bbygirl1', 'pg@123.com', 'NJ'), 
(5678901, 'Zach', 'ZakAttack', 'IrishMan1', 'irish@test.com', 'NV'), 
(2938475, 'Mike', 'Dogwatcher', 'DogLuvr12', 'dogman@test.com', 'NJ');

INSERT INTO parks (park_name, location, url, activities)
VALUES 
('Memorial Park', 1, 'memorialpark.com', 1),
('Boro Hill Park', 2, 'borohill.com', 2),
('Anthony Gallo Park', 3, 'anthonygallo.com', 3),
('Wall Field', 4, 'wallfield.com', 4), 
('Sunset Park', 5, 'sunsetpark.com', 5);

INSERT INTO activities (activity_name, location, parks_id)
VALUES 
('racing', 'Memorial Park', 1), 
('Dog Walking', 'Boro Hill Park', 2), 
('Fishing', 'Anthony Gallo Park', 3), 
('Tennis', 'Wall Field', 4), 
('Walking', 'Sunset Park', 5);