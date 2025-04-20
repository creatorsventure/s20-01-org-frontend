import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {OptionIndexComponent} from '../index/option.index.component';
import {OptionListComponent} from '../list/option.list.component';
import {OptionOpsComponent} from '../ops/option.ops.component';

export const routes: Routes = [{
    path: '',
    component: OptionIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.option,
        title: 'app.page.' + APP_NAVIGATION.option + '.name',
        description: 'app.page.' + APP_NAVIGATION.option + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: OptionListComponent,
        data: {pageName: APP_NAVIGATION.option, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: OptionOpsComponent,
        data: {pageName: APP_NAVIGATION.option, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.permissions.resolverParam,
        component: OptionOpsComponent,
        data: {pageName: APP_NAVIGATION.option, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.permissions.resolverParam,
        component: OptionOpsComponent,
        data: {pageName: APP_NAVIGATION.option, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class OptionRouteModule {
}
