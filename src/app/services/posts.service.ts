import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface'
import { Categoria } from '../interfaces/categoria.interface'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post [];
  arrCategorias: Categoria [];

  constructor() {
    this.arrPosts = [
      {
        id: 1,
        titulo: 'Viajar a la playa',
        texto: 'La luz solar puede mejorar nuestro estado de ánimo, disminuir la presión arterial, fortalecer nuestros huesos, músculos e incluso nuestro sistema inmunológico. Y una breve exposición es suficiente para cosechar todos estos beneficios.',
        autor: 'Isabel Solana',
        imagen: 'https://okdiario.com/img/vida-sana/2015/08/Depositphotos_1537765_m.jpg',
        fecha: '11-10-2023',
        categoria: 'Playa'
      },
      {
        id: 2,
        titulo: 'Viajar a la montaña',
        texto: 'El senderismo mejora la salud cardiovascular, reduce el colesterol malo, incrementa la energía y fuerza, tonifica la zona inferior del cuerpo y, además, incrementa la densidad ósea',
        autor: 'Fernando Piedra',
        imagen: 'https://www.ecoenlace.mx/wp-content/uploads/sites/15/2020/10/bastones-senderismo-6-1.jpg',
        fecha: '10-06-2023',
        categoria: 'Montaña'
      },
      {
        id: 3,
        titulo: 'Viajar a la ciudad',
        texto: 'Otra de las ventajas que ofrece vivir en la ciudad es que suele estar bien conectada. Por lo general se cuenta con buenas infraestructuras, autopistas y transporte público que permite moverse de forma rápida y sencilla. Otro factor importante, es poder tener acceso a internet donde y cuando quieras. Vida social activa.',
        autor: 'Pedro Calleja',
        imagen: 'https://s36445.pcdn.co/wp-content/uploads/2020/10/ciudades-03.jpg',
        fecha: '25-07-2023',
        categoria: 'Ciudad'
      },
      {
        id: 4,
        titulo: 'Viajar al campo',
        texto: 'Una de las principales ventajas de vivir en el campo es poder respirar aire puro, estar en un entorno sin polución en el ambiente. Ritmo de vida tranquilo. Vivir en el campo, aunque no está exento de responsabilidades, permite vivir la vida de forma más pausada y tranquila.',
        autor: 'Javier Rios',
        imagen: 'https://www.yaencontre.com/noticias/wp-content/uploads/2022/10/casas-con-gran-jard%C3%ADn.jpg',
        fecha: '27-08-2023',
        categoria: 'Rural'
      },
      {
        id: 5,
        titulo: 'Viajar a un festival',
        texto: 'Los festivales de artes constituyen un acontecimiento cultural en muchos pueblos, ciudades y países de todo el mundo. Como celebración de la riqueza y la diversidad de la cultura y la creatividad, a menudo engloban diversas formas de arte contemporáneo y tradicional: danza, música, teatro y artes y oficios.',
        autor: 'Marta Cuenca',
        imagen: 'https://www.mapfre.es/media/viaje-para-festivales-verano.jpg',
        fecha: '11-11-2023',
        categoria: 'Festivales'
      },
    ];

    this.arrCategorias = [ 
      {
        id: 1,
        nombre: 'Playa'
      },
      {
        id: 2,
        nombre: 'Montaña'
      },
      {
        id: 3,
        nombre: 'Ciudad'
      },
      {
        id: 4,
        nombre: 'Rural'
      },
      {
        id: 5,
        nombre: 'Festivales'
      },
    ]
   }

  // - Este metodo pare añadir un post recibe parametro post de tipo post.
  // - Hacemos un push al array con el post que recibimos del formulario.
  // - Tipamos la funcion que como es una accion lo que me devuelve es vacio.

   addPost(pPost: Post): void {
    this.arrPosts.push(pPost);
   }

  // - Este metodo reucpera todos los post.

   getAllPosts(): Post [] {
    return this.arrPosts;
   }

  // - Este metodo el post por si ID.

   getPostById(pId: number): Post | undefined {
    const post = this.arrPosts.find(post => post.id === pId);
    return post;
   }

  //  - Este metodo recupera los posts por categoria.

  //  getPostsByCategoria(pFiltros: any): Post [] {
  //   return this.arrPosts.filter(post => post.categoria = pFiltros.categoria)
  //  }

  // - Este metodo reucpera todas las categorias.

  getAllCategorias(): Categoria [] {
    return this.arrCategorias;
   }
}



// HACER UN SERVICIO PARA CADA INTERFAZ O UNO PARA LOS DOS.