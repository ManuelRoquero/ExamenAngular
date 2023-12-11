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
        titulo: 'playa'
      },
      {
        id: 2,
        titulo: 'montaña'
      },
      {
        id: 3,
        titulo: 'ciudad'
      },
      {
        id: 4,
        titulo: 'rural'
      },
      {
        id: 5,
        titulo: 'festivales'
      },
    ]
   }

  // - Este metodo reucpera todas las categorias.

  getAllCategorias(): Categoria [] {
    return this.arrCategorias;
   }

}