import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin.module';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
  path: '',
  children: [
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '**', redirectTo: 'view'}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
