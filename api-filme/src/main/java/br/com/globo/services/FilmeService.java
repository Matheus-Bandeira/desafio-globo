package br.com.globo.services;

import br.com.globo.domain.dtos.FilmeDto;
import br.com.globo.domain.model.Filme;
import br.com.globo.repositories.FilmeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmeService {
    @Autowired
    FilmeRepository filmeRepository;

    public Filme cadastrar(FilmeDto filmeDto) {
        ModelMapper modelMapper = new ModelMapper();
        Filme filme = modelMapper.map(filmeDto, Filme.class);
        filmeRepository.save(filme);
        return filme;
    }

    public List<Filme> buscarTodosFilmes() {
      return filmeRepository.findAll();
    }

    public Filme buscarPeloId(Long id) {
        var filme = filmeRepository.findById(id);
        if(filme.get() != null) {
            return filme.get();
        }
        return null;
    }
}
