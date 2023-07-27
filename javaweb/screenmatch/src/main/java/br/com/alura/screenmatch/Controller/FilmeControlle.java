package br.com.alura.screenmatch.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.alura.screenmatch.model.filme.DadosCadastroFilme;
import br.com.alura.screenmatch.model.filme.Filme;

@Controller
@RequestMapping("/filmes")

public class FilmeControlle {
    
    private List<Filme> filmes = new ArrayList<>();

    @GetMapping("/formulario")
    public String carregarPaginaFormulario() {
        return "filmes/formulario";
    }

    @GetMapping
    public String carregarPaginaListagem() {
        return "filmes/listagem";
    }

    @PostMapping
    public String cadastraFilme(DadosCadastroFilme dados) {
        String nome = dados.getNome();
        Integer duracao = dados.getDuracao();
        Integer ano = dados.getAno();
        String genero = dados.getGenero();
        var filme = new Filme(nome, duracao, ano, genero);
        filmes.add(filme);
        System.out.println(filmes);
        return "filmes/formulario";
    }
}
