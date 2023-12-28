create table tb_filme (
        id bigint not null auto_increment,
        atores varchar(255),
        descricao varchar(255),
        diretor varchar(255),
        genero varchar(255),
        nome varchar(255),
        url_imagem varchar(255),
        primary key (id)
 );