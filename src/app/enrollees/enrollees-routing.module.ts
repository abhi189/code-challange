import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENROLLEES_DETAILS_ROUTE } from './pages/details/details.page.route';
import { ENROLLEES_LIST_ROUTE } from './pages/list/list.page.route';

const routes: Routes = [
    ENROLLEES_LIST_ROUTE,
    ENROLLEES_DETAILS_ROUTE,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolleesRoutingModule {
  constructor() {}
}
