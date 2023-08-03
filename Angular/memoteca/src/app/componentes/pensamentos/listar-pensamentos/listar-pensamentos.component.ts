import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo3'
    },

    {
      conteudo: 'Estudando Angular',
      autoria: 'Alura',
      modelo: 'modelo2'
    }, 
    {
      conteudo: 'Estdasdasasdsadsadasdsdasdsadsdasdasdasdasdasdasdasdsadasdwqdefewfwefegrgwrfrekjgbjsfbashfbisdahfbsdahlbfdhbshadbfhsadbfbsdhfioasbhfdsandshabdashudbsahuddasdasdasdssadasdasudando Angular',
      autoria: 'gabryel',
      modelo: 'modelo1'
    } 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
