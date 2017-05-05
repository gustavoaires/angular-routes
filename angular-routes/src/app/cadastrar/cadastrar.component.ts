import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto.model';

import { Component } from '@angular/core';
@Component({
  selector: 'cadastrar',
  templateUrl: './cadastrar.component.html'
})

export class CadastrarComponent {
  nomeProduto: string = "";
  precoProduto: number = 0;

  constructor(public produtoService: ProdutoService) {
  }

  cadastrar() {
    let produto = new Produto();
    produto.nome = this.nomeProduto;
    produto.preco = this.precoProduto;
    this.produtoService.postProduto(produto)
      .subscribe(
        data => alert('Produto cadastrado com sucesso!'),
        error => alert('Algo de errado aconteceu. Produto nao cadastrado!')
      );
  }
}
