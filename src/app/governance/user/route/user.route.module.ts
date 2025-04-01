import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {UserIndexComponent} from '../index/user.index.component';
import {UserListComponent} from '../list/user.list.component';
import {UserOpsComponent} from '../ops/user.ops.component';

export const routes: Routes = [{
    path: '',
    component: UserIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.user,
        title: 'app.page.' + APP_NAVIGATION.user + '.name',
        description: 'app.page.' + APP_NAVIGATION.user + '.description',
        icon: 'user'
    },
    children: [{
        path: '',
        component: UserListComponent,
        data: {pageName: APP_NAVIGATION.user, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: UserOpsComponent,
        data: {pageName: APP_NAVIGATION.user, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.permissions.resolverParam,
        component: UserOpsComponent,
        data: {pageName: APP_NAVIGATION.user, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.permissions.resolverParam,
        component: UserOpsComponent,
        data: {pageName: APP_NAVIGATION.user, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class UserRouteModule {
}
