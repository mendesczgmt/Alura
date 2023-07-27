package br.com.alura.screenmatch.model.filme;

public class DadosCadastroFilme {
    private String nome;
    private Integer duracao;
    private Integer ano;
    private String genero;

    public DadosCadastroFilme(String nome, Integer duracao, Integer ano, String genero) {
        this.nome = nome;
        this.duracao = duracao;
        this.ano = ano;
        this.genero = genero;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getDuracao() {
        return duracao;
    }

    public void setDuracao(Integer duracao) {
        this.duracao = duracao;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    
}
