import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
