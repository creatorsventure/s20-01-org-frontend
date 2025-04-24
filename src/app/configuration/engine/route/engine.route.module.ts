import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {EngineIndexComponent} from '../index/engine.index.component';
import {EngineListComponent} from '../list/engine.list.component';
import {EngineOpsComponent} from '../ops/engine.ops.component';
import {PermissionGuard} from '../../../shared/guard/permission.guard';

export const routes: Routes = [{
    path: '',
    component: EngineIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.engine,
        title: 'app.page.' + APP_NAVIGATION.engine + '.name',
        description: 'app.page.' + APP_NAVIGATION.engine + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: EngineListComponent,
        data: {pageName: APP_NAVIGATION.engine, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: EngineOpsComponent,
        data: {pageName: APP_NAVIGATION.engine, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.resolverParam,
        component: EngineOpsComponent,
        data: {pageName: APP_NAVIGATION.engine, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.resolverParam,
        component: EngineOpsComponent,
        data: {pageName: APP_NAVIGATION.engine, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class EngineRouteModule {
}
