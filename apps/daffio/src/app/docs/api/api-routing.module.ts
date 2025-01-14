import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';
import { DaffioSimpleFooterComponent } from '../../core/footer/simple-footer/simple-footer.component';
import { DaffioDocsSidebarContentComponent } from '../../core/sidebar/components/docs-sidebar-content/docs-sidebar-content.component';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const apiRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioDocsSidebarContentComponent,
        [DaffioRouterNamedViewsEnum.FOOTER]: DaffioSimpleFooterComponent,
      },
    },
    children: [
      {
        path: '',
        component: DaffioApiListPageComponent,
        resolve: {
          reference: DaffioApiListResolver,
        },
      },
      {
        path: '**',
        component: DaffioApiPageComponent,
        resolve: {
          doc: DocsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(apiRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioDocsApiRoutingModule {}
