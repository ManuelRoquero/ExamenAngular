import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {

  formulario!: FormGroup;
  arrCategorias: Categoria [];
  id: number;

  //Inyecto los servicios en el constructor.
   constructor(private categoriasService: CategoriasService, private postsService: PostsService, private router:Router) {
    this.arrCategorias = []; 
    this.id = 6
   }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)]),
      fecha: new FormControl('', Validators.required),
      // fecha: new FormControl('', [Validators.required, Validators.pattern(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/)]),
      categoria: new FormControl('', Validators.required)
    })

    // Recupero todas las categorias del servicio para pintarlas.
    const response = this.categoriasService.getAllCategorias();
    this.arrCategorias = response

  }

  onSubmit() {

    // console.log(this.formulario.value)
    const datosFormulario = this.formulario.value
    this.postsService.addPost(datosFormulario);

    // Incrementar id del nuevo post.
    this.formulario.value.id = this.id
    this.id++;

    this.router.navigate(['/home'])
  }
}