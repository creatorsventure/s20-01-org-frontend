import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {SchemeIndexComponent} from '../index/scheme.index.component';
import {SchemeListComponent} from '../list/scheme.list.component';
import {SchemeOpsComponent} from '../ops/scheme.ops.component';

export const routes: Routes = [{
    path: '',
    component: SchemeIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.scheme,
        title: 'app.page.' + APP_NAVIGATION.scheme + '.name',
        description: 'app.page.' + APP_NAVIGATION.scheme + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: SchemeListComponent,
        data: {pageName: APP_NAVIGATION.scheme, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: SchemeOpsComponent,
        data: {pageName: APP_NAVIGATION.scheme, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.permissions.resolverParam,
        component: SchemeOpsComponent,
        data: {pageName: APP_NAVIGATION.scheme, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.permissions.resolverParam,
        component: SchemeOpsComponent,
        data: {pageName: APP_NAVIGATION.scheme, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class SchemeRouteModule {
}
