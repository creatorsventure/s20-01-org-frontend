import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {OrganizationIndexComponent} from '../index/organization.index.component';
import {OrganizationListComponent} from '../list/organization.list.component';
import {OrganizationOpsComponent} from '../ops/organization.ops.component';

export const routes: Routes = [{
    path: '',
    component: OrganizationIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.organization,
        title: 'app.page.' + APP_NAVIGATION.organization + '.name',
        description: 'app.page.' + APP_NAVIGATION.organization + '.description',
        icon: 'bank'
    },
    children: [{
        path: '',
        component: OrganizationListComponent,
        data: {pageName: APP_NAVIGATION.organization, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: OrganizationOpsComponent,
        data: {pageName: APP_NAVIGATION.organization, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.resolverParam,
        component: OrganizationOpsComponent,
        data: {pageName: APP_NAVIGATION.organization, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.resolverParam,
        component: OrganizationOpsComponent,
        data: {pageName: APP_NAVIGATION.organization, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class OrganizationRouteModule {
}
