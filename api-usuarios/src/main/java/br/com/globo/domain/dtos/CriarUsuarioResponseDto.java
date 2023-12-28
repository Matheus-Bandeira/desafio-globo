package br.com.globo.domain.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class CriarUsuarioResponseDto {

    private Long id;
    private String nome;
    private String email;
    private Date dataHoraCadastro;
}
