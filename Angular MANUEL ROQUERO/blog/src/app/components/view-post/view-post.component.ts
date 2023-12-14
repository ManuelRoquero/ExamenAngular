import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  //Pinto la información del post que me recupere el servicio.
    miPost: Post | undefined;

    constructor(
      private activatedRoute: ActivatedRoute,
      private postsService: PostsService) {
        this.miPost = {
          id: 0,
          titulo: "",
          texto: "",
          autor: "",
          imagen: "",
          fecha: "",
          categoria: ""
        }
      }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: any) => {
        const id = parseInt(params.idpost);
        // Recupero la información del post con ID --> x (params.idpost).
        // Lo pedimos al servicio a través de su método.
        this.miPost = this.postsService.getPostById(id);
      })

    }
  
}
