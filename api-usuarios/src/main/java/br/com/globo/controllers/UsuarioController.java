package br.com.globo.controllers;

import br.com.globo.domain.dtos.*;
import br.com.globo.domain.model.Usuario;
import br.com.globo.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/auth/login")
    public ResponseEntity<AutenticarUsuarioResponseDto> autenticarUsuario(@RequestBody @Valid AutenticarUsuarioRequestDto request) {
        AutenticarUsuarioResponseDto autenticarUsuarioResponseDto = new AutenticarUsuarioResponseDto();
        HttpStatus status = null;
        try {
            autenticarUsuarioResponseDto = usuarioService.autenticarUsuario(request);
            status = HttpStatus.OK;
        } catch (IllegalArgumentException e) {
            status = HttpStatus.UNAUTHORIZED;
        }

        return ResponseEntity.status(status).body(autenticarUsuarioResponseDto);
    }

    @PostMapping("/registrar")
    public ResponseEntity<CriarUsuarioResponseDto> registrarUsuario(@RequestBody CriarUsuarioRequestDto request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.criarUsuario(request));
    }

    @GetMapping
    public List<UsuarioResponse> buscarTodosUsuarios() {
        return usuarioService.buscarTodosUsuarios();
    }

    @DeleteMapping("/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
    }

    @PutMapping("/{id}")
    public Usuario atualizarUsuario(@PathVariable Long id, @RequestBody EditarUsuarioRequestDto editarUsuarioRequestDto) {
        return usuarioService.editarUsuario(id, editarUsuarioRequestDto);
    }

    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable Long id) {
        return this.usuarioService.buscarPorId(id);
    }


}
