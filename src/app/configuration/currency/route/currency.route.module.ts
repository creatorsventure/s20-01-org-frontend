import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {CurrencyIndexComponent} from '../index/currency.index.component';
import {CurrencyListComponent} from '../list/currency.list.component';
import {CurrencyOpsComponent} from '../ops/currency.ops.component';

export const routes: Routes = [{
    path: '',
    component: CurrencyIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.currency,
        title: 'app.page.' + APP_NAVIGATION.currency + '.name',
        description: 'app.page.' + APP_NAVIGATION.currency + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: CurrencyListComponent,
        data: {pageName: APP_NAVIGATION.currency, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: CurrencyOpsComponent,
        data: {pageName: APP_NAVIGATION.currency, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.permissions.resolverParam,
        component: CurrencyOpsComponent,
        data: {pageName: APP_NAVIGATION.currency, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.permissions.resolverParam,
        component: CurrencyOpsComponent,
        data: {pageName: APP_NAVIGATION.currency, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class CurrencyRouteModule {
}
