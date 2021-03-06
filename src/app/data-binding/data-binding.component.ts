import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
  }
  `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  valorAtual: string = '';
  valorSalvo: string = '';
  
  isMouseOver: boolean = false;

  nome: string = 'abc';
  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  constructor() { }

  ngOnInit() {
  }

  click(){
    alert('Clicou!');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvar(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
}
