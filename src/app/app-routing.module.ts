import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APIComponent } from './api/api.component';
import { DashComponent } from './dash/dash.component';
import { GraphsComponent } from './graphs/graphs.component';
import { LeavesComponent } from './leaves/leaves.component';
import { PostapiComponent } from './postapi/postapi.component';
import { ServicesComponent } from './services/services.component';
import { TableComponent } from './table/table.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [

  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"api",
    component:APIComponent
  },
  {
    path:"table",
    component:TableComponent
  },
  {
    path:"graphs",
    component:GraphsComponent
  },
  { path: 'dashboard', component: DashComponent },
  {
    path:"postapi",
    component:PostapiComponent
  },
  {
    path:"leaves",
    component:LeavesComponent
  },
  { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
    { path: '', redirectTo: 'services', pathMatch: 'full' },
    { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
