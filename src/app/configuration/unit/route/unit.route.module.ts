import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {UnitIndexComponent} from '../index/unit.index.component';
import {UnitListComponent} from '../list/unit.list.component';
import {UnitOpsComponent} from '../ops/unit.ops.component';

export const routes: Routes = [{
    path: '',
    component: UnitIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.unit,
        title: 'app.page.' + APP_NAVIGATION.unit + '.name',
        description: 'app.page.' + APP_NAVIGATION.unit + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: UnitListComponent,
        data: {pageName: APP_NAVIGATION.unit, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: UnitOpsComponent,
        data: {pageName: APP_NAVIGATION.unit, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.resolverParam,
        component: UnitOpsComponent,
        data: {pageName: APP_NAVIGATION.unit, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.resolverParam,
        component: UnitOpsComponent,
        data: {pageName: APP_NAVIGATION.unit, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class UnitRouteModule {
}
