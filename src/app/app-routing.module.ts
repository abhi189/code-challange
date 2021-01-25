import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Path } from './@core/structs';

const routes: Routes = [
  {
    path: Path.Home,
    redirectTo: `${Path.Enrollees}`,
    pathMatch: 'full',
  },
  {
    path: Path.Enrollees,
    loadChildren: () =>
      import('./enrollees/enrollees.module').then(
        (m) => m.EnrolleesModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
