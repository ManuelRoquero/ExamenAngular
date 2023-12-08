import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {

  formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)]),
      fecha: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required)
    })

  }

  onSubmit() {

    console.log(this.formulario.value)
    const datosFormulario = this.formulario.value

    // ENVIAR ESTOS DATOS AL SERVICIO.
    // INCREMENTAR ID++ DEL NUEVO POST.

  }
}