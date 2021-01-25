import { Route } from '@angular/router';
import { DetailsPage } from './details.page';

export const ENROLLEES_DETAILS_ROUTE: Route = {
  path: `:enrolleeId`,
  component: DetailsPage,
  data: {
    title: 'Enrollees Details',
    robots: 'noindex, nofollow',
  },
};
