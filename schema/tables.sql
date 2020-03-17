create table user (
	id int not null auto_increment,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    isVerified boolean default false,
	primary key(id)
);

create table auth (
	id int not null auto_increment,
    userId int,
    token varchar(100) not null,
    foreign key(userId) references user(id),
    primary key(id)
);