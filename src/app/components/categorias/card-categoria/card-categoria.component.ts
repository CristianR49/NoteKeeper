import { Component, Input } from '@angular/core';
import { Categoria } from '../categoria';

// One-way Data Binding

@Component({
  selector: 'app-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css'],
})
export class CardCategoriaComponent {
  @Input() categoria: Categoria = {
    id: 0,
    titulo: 'Categoria1',
  };
}
