import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { NumberComponent } from './number/number.component';
import { SetdataComponent } from './setdata/setdata.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'get',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: SetdataComponent,
  },

  {
    path: 'get',
    component: GetdataComponent,
  },
  {
    path: 'number',
    component: NumberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
