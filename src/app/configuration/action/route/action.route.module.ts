import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {ActionIndexComponent} from '../index/action.index.component';
import {ActionListComponent} from '../list/action.list.component';
import {ActionOpsComponent} from '../ops/action.ops.component';
import {PermissionGuard} from '../../../shared/guard/permission.guard';

export const routes: Routes = [{
    path: '',
    component: ActionIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.action,
        title: 'app.page.' + APP_NAVIGATION.action + '.name',
        description: 'app.page.' + APP_NAVIGATION.action + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: ActionListComponent,
        data: {pageName: APP_NAVIGATION.action, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: ActionOpsComponent,
        data: {pageName: APP_NAVIGATION.action, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.resolverParam,
        component: ActionOpsComponent,
        data: {pageName: APP_NAVIGATION.action, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.resolverParam,
        component: ActionOpsComponent,
        data: {pageName: APP_NAVIGATION.action, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class ActionRouteModule {
}
