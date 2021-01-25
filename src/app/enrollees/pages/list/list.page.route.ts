import { Route } from '@angular/router';
import { ListPage } from './list.page';

export const ENROLLEES_LIST_ROUTE: Route = {
  path: '',
  component: ListPage,
  data: {
    title: 'Enrollees list',
    robots: 'noindex, nofollow',
  },
};
