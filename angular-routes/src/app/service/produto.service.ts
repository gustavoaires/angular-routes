import { Produto } from '../model/produto.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [];

  static URL = 'http://rest.learncode.academy/api/gustavo/produtos/';

  constructor(private http: Http) {

  }

  getProdutos() {
    return this.http
      .get(ProdutoService.URL)
        .map((response: Response) => {
          this.produtos = response.json()
          return this.produtos;
        })
        .catch((error: Response) => Observable.throw(error));
  }

  postProduto(produto: Produto) {
    return this.http
      .post(ProdutoService.URL, produto)
        .map((response: Response) => this.produtos.push(produto))
        .catch((error: Response) => Observable.throw(error));
  }
}
