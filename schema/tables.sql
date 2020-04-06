create table user (
	id int not null auto_increment,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    primary key(id)
);

