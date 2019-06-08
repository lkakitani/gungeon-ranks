drop table if exists guns_results;
drop table if exists actives_results;
drop table if exists passives_results;
drop table if exists guns;
drop table if exists actives;
drop table if exists passives;

CREATE TABLE guns (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 name varchar(200) NOT NULL,
 icon_path VARCHAR(500),
 quote VARCHAR(255),
 quality varchar(5),
 wiki_page varchar(400),
 boss_rating integer,
 room_rating integer,
 vote_count integer DEFAULT 0
);

CREATE TABLE passives (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 name varchar(200) NOT NULL,
 icon_path VARCHAR(500),
 quote VARCHAR(255),
 quality varchar(5),
 wiki_page varchar(400),
 elo_rating integer,
 vote_count integer DEFAULT 0
);

CREATE TABLE actives (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 name varchar(200) NOT NULL,
 icon_path VARCHAR(500),
 quote VARCHAR(255),
 quality varchar(5),
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

CREATE TABLE passives_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 winner_id integer,
 loser_id integer,
 unique_vote varchar(300) UNIQUE NOT NULL
);

CREATE TABLE actives_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 updated_at timestamp NOT NULL,
 winner_id integer,
 loser_id integer,
 unique_vote varchar(300) UNIQUE NOT NULL
);