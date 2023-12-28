package br.com.globo.controller;

import br.com.globo.domain.dtos.AutenticarUsuarioRequestDto;
import br.com.globo.domain.dtos.CriarUsuarioRequestDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Locale;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void registrarUsuarioTest() throws Exception {
        Faker faker = new Faker(new Locale("pt-BR"));
        String nome = faker.name().fullName();
        String email = faker.internet().emailAddress();
        String senha = faker.internet().password(8,12);
        //AutenticarUsuarioRequestDto request = new AutenticarUsuarioRequestDto(email, senha);

        CriarUsuarioRequestDto requestDto = new CriarUsuarioRequestDto();
        requestDto.setNome(nome);
        requestDto.setEmail(email);
        requestDto.setSenha(senha);

        mockMvc.perform(
                post("/usuario/registrar")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(requestDto)))
                .andExpect(status()
                        .isCreated());
    }

    @Test
    public void autenticarUsuarioTest() throws Exception {
        Faker faker = new Faker(new Locale("pt-BR"));
        String nome = faker.name().fullName();
        String email = faker.internet().emailAddress();
        String senha = faker.internet().password(8,12);

        CriarUsuarioRequestDto criarUsuarioRequestDto = new CriarUsuarioRequestDto();
        criarUsuarioRequestDto.setNome(nome);
        criarUsuarioRequestDto.setEmail(email);
        criarUsuarioRequestDto.setSenha(senha);

        mockMvc.perform(
                post("/usuario/registrar")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(criarUsuarioRequestDto)));


        AutenticarUsuarioRequestDto autenticarUsuarioRequestDto = new AutenticarUsuarioRequestDto(criarUsuarioRequestDto.getEmail(), criarUsuarioRequestDto.getSenha());
        mockMvc.perform(
                post("/usuario/auth/login")
                   .contentType("application/json").content(objectMapper.writeValueAsString(autenticarUsuarioRequestDto)))
                .andExpect(status().isOk());
    }

    @Test
    public void autenticarUsuarioDeniedTest() throws Exception {
        Faker faker = new Faker(new Locale("pt-BR"));
        String email = faker.internet().emailAddress();
        String senha = faker.internet().password(8,12);

        AutenticarUsuarioRequestDto autenticarUsuarioRequestDto = new AutenticarUsuarioRequestDto(email, senha);

        mockMvc.perform(
                        post("/usuario/auth/login")
                                .contentType("application/json").content(objectMapper.writeValueAsString(autenticarUsuarioRequestDto)))
                .andExpect(status().isUnauthorized());
    }
}
