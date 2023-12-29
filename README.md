# Desafio Globo

Este projeto é para atender o desafio técnico informado por email (FullStack);

## Tecnologias
- Java 17;
- Spring boot 3.1.5;
- Swagger;
- Mysql;
- Flyway (Migração de dados);
- Jwt;
- Swagger para documentar as api's;
- Angular 14;

## Decisões Técnicas
Na minha concepção, decidi dividir em 2 microservices:
um microservice para api de usuário e outro para api de filmes;

Esta decisão é melhor para dividir as responsabilidades de cada microservice;
Cada microservice tem o eu próprio banco de dados;

Além disso, foi desenvolvido um terceiro projeto em angular
para consumir as api's de usuário e de filmes;


## Arquitetura básica do projeto
![Arquitetura básica do projeto](https://github.com/Matheus-Bandeira/desafio-globo/blob/main/esquema_arquitetural.png)


## Funcionamento

O projeto consiste em uma interface gráfica criada com objetivo
de visualizar os melhores filmes que estão em cartaz;
Além disso, é possível cadastrar novos filmes no sistema;
O sistema gerencia todos os usuários que podem entrar e quais menus podem ter acesso;
Apenas o usuário do tipo ROLE_ADMIN poderá cadastrar novos filmes;
O usuário do tipo ROLE_USER poderá ter acesso à listagem de filmes e realizar sua votação;

Para acesso ao sistema, é necessário que o usuário faça um cadastro prévio,
na parte de "Cadastre-se aqui!", e em seguida faça o login na aplicação;

Se o usuário estiver cadastrado como ROLE_ADMIN terá acesso ao menus:

	- Gerenciamento de Usuários
		Neste Menu o usuário poderá cadastrar outros usuários;
		Editar ou excluir (de forma lógica) usuários do sistema;
		
		Obs: Esse menu só ficará disponível para este tipo de usuário;
		
	- Filmes	
		Neste Menu o usuário terá acesso a listagem de filmes
		assim como o cadastro de novos filmes;
		
		Terá acesso também aos detalhes dos filmes;

Se o usuário estiver cadastrado como ROLE_USER terá acesso aos menus:

	- Filmes
		Neste menu poderá ver a listagem de filmes;
		E dar nota no filme (Botão de votar);

		Obs: O Botão de votar só ficará disponível para este tipo de usuário;
		

Assim que realizar a importação dos projetos terão dois usuários padrões
	
	email : admin@example.com
	senha : admin1234
	
	email : user@example.com
	senha : user1234
	
## Como executar o projeto

	Faça o clone no repositório e importe os projetos na ide de sua preferência;
	
	Após importar os projetos, verifique no arquivo application.properties
	o usuário e senha de banco de dados;
	
	Será necessário criar o schema do banco no ambiente local que for executar;
	
	Cada serviço possui seu próprio banco de dados, como na imagem encontrada 
	na sessão de Arquitetura básica;
	
	Execute os comandos para criar os schemas
	
	CREATE DATABASE db_users;
	CREATE DATABASE db_movies;
	
	Foi utilizado o Flyway para controle de versão dos scripts do banco de dados;
	Por isso, assim quando subir os projetos das api's, terão 2 usuários e alguns filmes já cadastrados;
	
	
	A api de usuário por padrão vai executar na porta 8080;
	A api de filme por padrão vai executar na porta 8081;
	
	Links do swagger das aplicações:
		http://localhost:8080/swagger-ui/index.html
		
		http://localhost:8081/swagger-ui/index.html
	
	
	Para executar o front-end angular precisa-se importar o projeto para a ide de sua preferencia
	e em seguida executar o comando:
	
		npm install ---> Para baixar as depedências do projeto
		
		ng serve  ---> Para para executar o projeto local
		
	Por padrão o front-end vai excutar na porta 4200
		
		http://localhost:4200/
		
	Obs: Verifique acima o usuário e senha que poderão logar no sistema;
	
## Algumas telas principais do projeto

Tela de Login:

![Tela Login](https://github.com/Matheus-Bandeira/desafio-globo/blob/main/tela_login.png)

Tela de Registro:

![Tela Registro](https://github.com/Matheus-Bandeira/desafio-globo/blob/main/tela_registro_usuarios.png)

Obs:
1) O usuário que fizer o cadastro nessa tela de registro, automaticamente terá um perfil de ROLE_USER;

2) Essas duas telas acimas são as únicas rotas que não tem o guardião de rotas do angular;
As demais telas que serão mostradas a seguir, terão o guardião de rotas, ou seja,
somente o usuários autenticados terão acesso;
Mesmo que o usuário saiba a rota e tente colocar na url, se não tiver autenticado,
o sistema vai redirecionar para o tela de login;

Tela Home:

![Tela Home](https://github.com/Matheus-Bandeira/desafio-globo/blob/main/tela_home.png)

Não será possivel chegar nesta tela sem antes está autenticado;
Na tela home, ele mostra o usuário que está logado.
Ao realizar o login, é guardado na sessão as informações do usuários como:
nome, email e suas roles;
Desta forma os menus vão aparecer de acordo com suas roles;

Tela listagem de filmes:

![Listagem de Filmes](https://github.com/Matheus-Bandeira/desafio-globo/blob/main/tela_listagem_filmes.png)

Esta tela também tem um campo onde poderá pesquisar por nome os filmes cadastrados;	

## Informações do desenvolvedor

Nome: Matheus de Almeida Bandeira

Linkedin: https://www.linkedin.com/in/matheus-bandeira-589181149/

email: matheusbandeira944@gmail.com
