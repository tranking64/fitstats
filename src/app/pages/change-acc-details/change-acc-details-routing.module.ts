import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeAccDetailsPage } from './change-acc-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAccDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAccDetailsPageRoutingModule {}
