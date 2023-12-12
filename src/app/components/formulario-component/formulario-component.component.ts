import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {

  formulario!: FormGroup;
  arrCategorias: Categoria [];

  //Inyecto los servicios en el constructor.
   constructor(private categoriasService: CategoriasService, private postsService: PostsService) {
    this.arrCategorias = []; 
   }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)]),
      // MRP Validador para la fecha.
      fecha: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required)
    })

    // Recupero todas las categorias del servicio para pintarlas.
    const response = this.categoriasService.getAllCategorias();
    this.arrCategorias = response

  }

  onSubmit() {

    // console.log(this.formulario.value)
    const datosFormulario = this.formulario.value
    this.postsService.addPost(datosFormulario)
    
    // MRP Incrementar ID++ del nuevo post.

  }
}