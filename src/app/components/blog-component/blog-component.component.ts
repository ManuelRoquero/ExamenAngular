import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent {


  arrPosts: Post [];

  // Inyecto el servicio en el constructor.
  constructor(private postsService: PostsService) {
    this.arrPosts = [];
  }

  // Recupero todos los post del servicio para pintarlas.
  ngOnInit() {

    const response = this.postsService.getAllPosts();
    this.arrPosts = response;
  }

  onFiltroCategoria($event: any) {

  // Llamar a un método del servicio que me recupere los posts cuya cateogía sea la que el usuario me está introduciendo.
  // getPostsByCategoria()

  //  console.log('busqueda en padre:', $event);

    this.arrPosts = this.postsService.getPostsByCategoria($event);
  }

}