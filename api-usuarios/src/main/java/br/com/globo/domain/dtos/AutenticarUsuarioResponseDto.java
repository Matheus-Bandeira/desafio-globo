package br.com.globo.domain.dtos;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class AutenticarUsuarioResponseDto {

    private Long id;
    private String nome;
    private String email;
    private Date dataHoraAcesso;
    private String token;
    private Date dataHoraExpiracao;
    private List<String> roles;
}
