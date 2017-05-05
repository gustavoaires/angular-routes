import { Produto } from '../model/produto.model';
import { ProdutoService } from '../service/produto.service';

import { Component } from '@angular/core';
@Component({
  selector: 'mostrar',
  templateUrl: './mostrar.component.html'
})

export class MostrarComponent {
  public produtos: Produto[] = [];

  constructor(public produtoService: ProdutoService) {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos()
    .subscribe(
      data => this.produtos = data,
      error => console.log(error)
    );
  }
}
