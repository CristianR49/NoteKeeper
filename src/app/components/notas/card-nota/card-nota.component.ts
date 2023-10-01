import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nota } from '../../../components/notas/nota';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css'],
})
export class CardNotaComponent {
  @Input() nota: Nota;

  constructor() {
    this.nota = new Nota('', '', 'dark', 0);
  }
}