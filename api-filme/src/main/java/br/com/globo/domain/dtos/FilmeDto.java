package br.com.globo.domain.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class FilmeDto {

    @NotNull
    private String nome;
    @NotNull
    private String descricao;
    private String urlImagem;

    @NotNull
    private String diretor;

    @NotNull
    private String genero;

    @NotNull
    private String atores;
}
