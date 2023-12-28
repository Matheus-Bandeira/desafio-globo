package br.com.globo.domain.model;

import br.com.globo.enumeration.ERole;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole nome;

}
