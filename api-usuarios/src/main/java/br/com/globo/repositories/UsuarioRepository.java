package br.com.globo.repositories;

import br.com.globo.domain.model.Usuario;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /*
     * Consulta em linguagem JPQL para buscar 1 usuário através do email
     */
    @Query("select u from Usuario u where u.email = :param1")
    Usuario find(@Param("param1") String email);

    /*
     * Consulta em linguagem JPQL para buscar 1 usuário através do email e da senha
     */
    @Query("select u from Usuario u where u.email = :param1 and u.senha = :param2")
    Usuario find(@Param("param1") String email, @Param("param2") String senha);

    @Query(value = "SELECT * FROM tb_usuario where ATIVO = 1", nativeQuery = true)
    List<Usuario> findAllUsersActive();

    @Transactional
    @Modifying
    @Query(value = "update tb_usuario set ativo = 0 where id = :id", nativeQuery = true)
    void logicDeletionUser(@Param("id") Long id);
}
