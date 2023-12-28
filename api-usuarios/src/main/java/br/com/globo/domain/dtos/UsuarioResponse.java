package br.com.globo.domain.dtos;

import lombok.Data;

@Data
public class UsuarioResponse {

    private Long id;
    private String nome;
    private String email;
}
