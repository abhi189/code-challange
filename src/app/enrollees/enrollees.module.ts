import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrolleesRoutingModule } from './enrollees-routing.module';
import { DetailsPage } from './pages/details/details.page';
import { ListPage } from './pages/list/list.page';

@NgModule({
  declarations: [ListPage, DetailsPage],
  imports: [CommonModule, FormsModule, EnrolleesRoutingModule],
})
export class EnrolleesModule {
  constructor() {}
}
