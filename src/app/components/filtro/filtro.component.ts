import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Output() filtroCategoria: EventEmitter<string>

  arrCategorias: Categoria [];

  //Inyecto los servicios en el constructor.
   constructor(private categoriasService: CategoriasService) {
    this.arrCategorias = []; 

    this.filtroCategoria = new EventEmitter
   }

   ngOnInit(): void {

    // Recupero todas las categorias del servicio para pintarlas.
    const response = this.categoriasService.getAllCategorias();
    this.arrCategorias = response
  }

  recogerDatosCategoria($event: any) {
    // console.log('busqueda en hijo:', $event.target.value)
    this.filtroCategoria.emit($event.target.value);
  }

}
