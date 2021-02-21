import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PqrFormComponent } from './views/pqr/pqr-form/pqr-form.component';
import { PqrListComponent } from './views/pqr/pqr-list/pqr-list.component';

const routes: Routes = [
  { path: 'pqr', component: PqrListComponent },
  { path: 'pqr/new', component: PqrFormComponent },
  { path: '**', redirectTo: 'pqr' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
