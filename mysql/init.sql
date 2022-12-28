CREATE TABLE if not exists people(id int not null auto_increment, name varchar(255), primary key(id));

INSERT IGNORE INTO people(name) 
values ('name 0'), ('name 2'), ('name 3'), ('name 4'), ('name 5');