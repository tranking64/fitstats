import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAccDetailsPageRoutingModule } from './change-acc-details-routing.module';

import { ChangeAccDetailsPage } from './change-acc-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeAccDetailsPageRoutingModule
  ],
  declarations: [ChangeAccDetailsPage]
})
export class ChangeAccDetailsPageModule {}
