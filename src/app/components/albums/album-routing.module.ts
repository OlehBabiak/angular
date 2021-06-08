import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./albums.component";

const routes: Routes = [
  {path: '', component: AlbumsComponent},
  {
  path: 'album/:id', loadChildren: () => import('../albums/photos/photo.module')
      .then(m=> m.PhotoModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
