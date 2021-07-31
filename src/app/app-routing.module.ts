import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  
  {path:"",component:HomeComponent},

  {path:"add-post",component:AddPostComponent},

  {path:"footer",component:FooterComponent},

  {path:"navbar",component:NavbarComponent},

  {path:"list-post",component:ListPostComponent},

  {path:"update-post",component:UpdatePostComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
