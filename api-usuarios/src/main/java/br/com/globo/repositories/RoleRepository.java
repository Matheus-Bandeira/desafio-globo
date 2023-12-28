package br.com.globo.repositories;

import br.com.globo.domain.model.Role;
import br.com.globo.enumeration.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByNome(ERole nome);

    @Query(value = "select r.nome from tb_role r inner join user_roles ur on r.id = ur.role_id where user_id = ?", nativeQuery = true)
    List<String> findRolesByIdUser(Long idUser);
}
