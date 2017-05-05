import { Produto } from '../model/produto.model';

import { Input, Component } from '@angular/core';
@Component({
  selector: 'detalhes',
  templateUrl: './detalheproduto.component.html'
})

export class DetalheComponent {
  @Input("produto") produto: Produto;
}
