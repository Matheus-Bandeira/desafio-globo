package br.com.globo.domain.dtos;

import jakarta.validation.constraints.NotBlank;


public record AutenticarUsuarioRequestDto(@NotBlank String email, @NotBlank String senha) {
}
