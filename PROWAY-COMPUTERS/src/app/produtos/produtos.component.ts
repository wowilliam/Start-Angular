import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {IProduto, produtos} from '../produtos'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
   produtos: IProduto[] | undefined;

  constructor( 
    private produtosService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

}
