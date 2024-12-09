import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitFormComponent } from './fruit-form/fruit-form.component';

const routes: Routes = [

  
    { path: 'fruits', component: FruitListComponent },
    { path: 'fruits/new', component: FruitFormComponent },
    { path: 'fruits/edit/:id', component: FruitFormComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
