import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponentComponent } from './components/blog-component/blog-component.component'
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormularioComponentComponent } from './components/formulario-component/formulario-component.component';

const routes: Routes = [
  { path: "home", component: BlogComponentComponent },
  { path: "post/:idpost", component: ViewPostComponent },
  { path: "new", component: FormularioComponentComponent },
  { path: "**", redirectTo: "home"}
  
  // MRP Ruta filtro categoria
  //  { path: "category/:categoryTitle", component: FiltroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
