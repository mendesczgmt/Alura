package br.com.alura.screenmatch.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/filmes")

public class FilmeControlle {
    
    @GetMapping
    public String carregarPaginaFormulario() {
        return "filmes/formulario";
    }
}
