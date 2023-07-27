import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {

    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'dev',
    modelo: ''

  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("novo pensamento criado")
  }

  cancelarPensamento() {
    alert("pensamento cancelado")
  }

}
