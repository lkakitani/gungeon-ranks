drop table if exists guns_results;
drop table if exists items_results;
drop table if exists guns;
drop table if exists items;

CREATE TABLE guns (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 name varchar(200) NOT NULL,
 quote VARCHAR(255),
 quality varchar(10),
 wiki_page varchar(400),
 elo_rating integer,
 vote_count integer DEFAULT 0
);

CREATE TABLE items (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 name varchar(200) NOT NULL,
 quote VARCHAR(255),
 quality varchar(10),
 wiki_page varchar(400),
 elo_rating integer,
 vote_count integer DEFAULT 0
);

CREATE TABLE guns_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 winner_id integer,
 loser_id integer,
 unique_vote varchar(300) UNIQUE NOT NULL
);

CREATE TABLE items_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 winner_id integer,
 loser_id integer,
 unique_vote varchar(300) UNIQUE NOT NULL
);