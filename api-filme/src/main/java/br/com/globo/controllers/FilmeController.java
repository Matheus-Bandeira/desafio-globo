package br.com.globo.controllers;

import br.com.globo.domain.dtos.FilmeDto;
import br.com.globo.domain.model.Filme;
import br.com.globo.services.FilmeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/filme")
public class FilmeController {

    @Autowired
    private FilmeService filmeService;

    @PostMapping
    public Filme cadastrar(@RequestBody FilmeDto filmeDto) {
        return this.filmeService.cadastrar(filmeDto);
    }

    @GetMapping
    public List<Filme> buscarTodos() {
        return this.filmeService.buscarTodosFilmes();
    }

    @GetMapping("/{id}")
    public Filme buscarPorId(@PathVariable Long id) {
        return this.filmeService.buscarPeloId(id);
    }
}
