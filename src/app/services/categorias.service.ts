import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  arrCategorias: Categoria [];

  constructor() {

    this.arrCategorias = [ 
      {
        id: 1,
        titulo: 'Playa'
      },
      {
        id: 2,
        titulo: 'Montaña'
      },
      {
        id: 3,
        titulo: 'Ciudad'
      },
      {
        id: 4,
        titulo: 'Rural'
      },
      {
        id: 5,
        titulo: 'Festivales'
      },
    ]
   }

  // - Este metodo reucpera todas las categorias.

  getAllCategorias(): Categoria [] {
    return this.arrCategorias;
   }

}