package br.com.globo.services;

import br.com.globo.components.JwtTokenComponent;
import br.com.globo.domain.dtos.*;
import br.com.globo.domain.model.Role;
import br.com.globo.domain.model.Usuario;
import br.com.globo.enumeration.ERole;
import br.com.globo.helpers.SHA1CryptoHelper;
import br.com.globo.repositories.RoleRepository;
import br.com.globo.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired //autoinicialização
    JwtTokenComponent jwtTokenComponent;

    public static final String ADMIN = "admin";
    public static final String USER = "user";


    public CriarUsuarioResponseDto criarUsuario(CriarUsuarioRequestDto request) {

        //verificar se o email informado já está cadastrado no banco de dados
        if(usuarioRepository.find(request.getEmail()) != null) {
            throw new IllegalArgumentException("O email informado já está cadastrado para outro usuário.");
        }

        //capturar os dados do usuário
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setSenha(request.getSenha());
        usuario.setSenha(SHA1CryptoHelper.encrypt(request.getSenha()));
        usuario.setAtivo(Boolean.TRUE);


        Set<String> retornoRole = request.getRoles();
        Set<Role> roles = new HashSet<>();

        if(retornoRole != null) {
            retornoRole.forEach( role -> {
                switch (role) {
                    case ADMIN:
                        Role adminRole = roleRepository.findByNome(ERole.ROLE_ADMIN);
                        roles.add(adminRole);

                        break;

                    case USER:
                        Role userRole = roleRepository.findByNome(ERole.ROLE_USER);
                        roles.add(userRole);

                        break;
                    default:
                        Role userRole2 = roleRepository.findByNome(ERole.ROLE_USER);
                        roles.add(userRole2);
                }


            });
        } else {
            Role userRole = roleRepository.findByNome(ERole.ROLE_USER);
            roles.add(userRole);
        }

        usuario.setRoles(roles);

        usuarioRepository.save(usuario);

        //gravar no banco de dados
        usuarioRepository.save(usuario);

        CriarUsuarioResponseDto response = new CriarUsuarioResponseDto();
        response.setId(usuario.getId());
        response.setNome(usuario.getNome());
        response.setEmail(usuario.getEmail());
        response.setDataHoraCadastro(new Date());

        return response;
    }

    public AutenticarUsuarioResponseDto autenticarUsuario(AutenticarUsuarioRequestDto request) {
        //buscar o usuário no banco de dados através do email e da senha
        Usuario usuario = usuarioRepository.find(request.email(), SHA1CryptoHelper.encrypt(request.senha()));

        //verificar se o usuário não foi encontrado
        if(usuario == null)
            throw new IllegalArgumentException("Acesso negado. Usuário não encontrado.");

        //gerando os dados do usuário autenticado
        AutenticarUsuarioResponseDto response = new AutenticarUsuarioResponseDto();
        response.setId(usuario.getId());
        response.setNome(usuario.getNome());
        response.setEmail(usuario.getEmail());
        response.setDataHoraAcesso(new Date());
        response.setToken(jwtTokenComponent.generateToken(usuario));
        response.setDataHoraExpiracao(jwtTokenComponent.getExpirationDate());

        // Descobrir quais roles este usuario tem;

        var findRoleUser = roleRepository.findRolesByIdUser(usuario.getId());

        response.setRoles(findRoleUser);

        return response;
    }


    public List<UsuarioResponse>  buscarTodosUsuarios() {

        List<Usuario> usuarioList = usuarioRepository.findAllUsersActive();
        List<UsuarioResponse> usuarioResponseList = new ArrayList<>();


        usuarioList.forEach( usuario -> {
            UsuarioResponse usuarioResponse = new UsuarioResponse();
            usuarioResponse.setId(usuario.getId());
            usuarioResponse.setNome(usuario.getNome());
            usuarioResponse.setEmail(usuario.getEmail());
            usuarioResponseList.add(usuarioResponse);
        });

        return usuarioResponseList;
    }

    public void deletarUsuario(Long id) {

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        Usuario usuario = usuarioOptional.get();
        if (usuario != null) {
            usuarioRepository.logicDeletionUser(usuario.getId());
        }
    }

    public Usuario editarUsuario(Long id, EditarUsuarioRequestDto editarUsuarioRequestDto) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        Usuario usuario = usuarioOptional.get();
        if (usuario != null) {
            usuario.setNome(editarUsuarioRequestDto.getNome());
            usuario.setEmail(editarUsuarioRequestDto.getEmail());
            usuarioRepository.save(usuario);
        }

        return usuario;
    }

    public Usuario buscarPorId(Long id) {
        var response = this.usuarioRepository.findById(id);
        Usuario usuarioResponse = response.get();
        if (usuarioResponse != null)
            return usuarioResponse;

        return null;
    }
}
