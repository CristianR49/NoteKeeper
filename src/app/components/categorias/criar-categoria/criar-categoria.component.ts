import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css'],
})
export class CriarCategoriaComponent {
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.categoria = new Categoria('', 0);
  }
  criarCategoria() {
    this.categoriaService.criar(this.categoria).subscribe((categoria) => {
      this.toastService.success(
        `Categoria ${categoria.titulo} criada com sucesso.`,
        'Sucesso'
      );

      this.router.navigate(['categorias/listar']);
    });
  }
}
/*
export class CriarNategoriaComponent {
  nategoria: Nategoria;

  constructor(
    private nategoriaService: NategoriaService,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.nategoria = new Nategoria('', '', 'dark', 0);
  }

  criarNategoria() {
    this.nategoriaService.criar(this.nategoria).subscribe((nategoria) => {
      this.toastService.success(
        `Nategoria ${nategoria.titulo} criada com sucesso.`,
        'Sucesso'
      );

      this.router.navigate(['/nategorias', 'listar']);
    });
  }
}*/
