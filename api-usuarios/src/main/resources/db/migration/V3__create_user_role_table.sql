CREATE TABLE user_roles (
    user_id BIGINT,
    role_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES tb_usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES tb_role(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);