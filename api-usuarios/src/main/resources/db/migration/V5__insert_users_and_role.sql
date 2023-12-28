-- 7b902e6ff1db9f560443f2048974fd7d386975b0  admin1234
INSERT INTO tb_usuario (nome, email, senha, ativo) VALUES ('admin', 'admin@example.com', '7b902e6ff1db9f560443f2048974fd7d386975b0', 1);
INSERT INTO user_roles (user_id, role_id) VALUES (1, 1);


-- d7316a3074d562269cf4302e4eed46369b523687 user1234
INSERT INTO tb_usuario (nome, email, senha, ativo) VALUES ('user', 'user@example.com', 'd7316a3074d562269cf4302e4eed46369b523687', 1);
INSERT INTO user_roles (user_id, role_id) VALUES (2, 2);