import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {OptionsIndexComponent} from '../index/options.index.component';
import {OptionsListComponent} from '../list/options.list.component';
import {OptionsOpsComponent} from '../ops/options.ops.component';

export const routes: Routes = [{
    path: '',
    component: OptionsIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.options,
        title: 'app.page.' + APP_NAVIGATION.options + '.name',
        description: 'app.page.' + APP_NAVIGATION.options + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: OptionsListComponent,
        data: {pageName: APP_NAVIGATION.options, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: OptionsOpsComponent,
        data: {pageName: APP_NAVIGATION.options, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.permissions.resolverParam,
        component: OptionsOpsComponent,
        data: {pageName: APP_NAVIGATION.options, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.permissions.resolverParam,
        component: OptionsOpsComponent,
        data: {pageName: APP_NAVIGATION.options, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class OptionsRouteModule {
}
