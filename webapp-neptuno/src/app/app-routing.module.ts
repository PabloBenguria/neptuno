import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent }  from './cliente/cliente.component';
import { PruebaComponent }  from './prueba/prueba.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClienteComponent },
  { path: 'prueba', component: PruebaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}