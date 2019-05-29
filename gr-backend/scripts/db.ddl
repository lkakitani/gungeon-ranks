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
 boss_rating numeric (10,4),
 room_rating numeric (10,4),
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
 elo_rating numeric (10,4),
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
 elo_rating numeric (10,4),
 vote_count integer DEFAULT 0
);

CREATE TABLE guns_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 left_item_id integer REFERENCES guns(id) NOT NULL,
 right_item_id integer REFERENCES guns(id) NOT NULL,
 winner_id integer REFERENCES guns(id) NOT NULL,
 loser_id integer REFERENCES guns(id) NOT NULL,
 unique_vote varchar(300) UNIQUE NOT NULL
);

CREATE TABLE passives_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 left_item_id integer REFERENCES passives(id) NOT NULL,
 right_item_id integer REFERENCES passives(id) NOT NULL,
 winner_id integer REFERENCES passives(id) NOT NULL,
 loser_id integer REFERENCES passives(id) NOT NULL,
 unique_vote varchar(300) UNIQUE NOT NULL
);

CREATE TABLE actives_results (
 id serial PRIMARY KEY,
 created_at timestamp NOT NULL,
 left_item_id integer REFERENCES actives(id) NOT NULL,
 right_item_id integer REFERENCES actives(id) NOT NULL,
 winner_id integer REFERENCES actives(id) NOT NULL,
 loser_id integer REFERENCES actives(id) NOT NULL,
 unique_vote varchar(300) UNIQUE NOT NULL
);