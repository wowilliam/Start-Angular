import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
   produto: IProduto | undefined;
   
  constructor(
    private produtoService: undefined;
  ) { }

  ngOnInit(): void {
  }

}
