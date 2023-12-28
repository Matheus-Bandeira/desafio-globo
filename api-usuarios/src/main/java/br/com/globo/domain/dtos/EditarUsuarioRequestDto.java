package br.com.globo.domain.dtos;

import lombok.Data;

@Data
public class EditarUsuarioRequestDto {

    private String nome;
    private String email;
}
