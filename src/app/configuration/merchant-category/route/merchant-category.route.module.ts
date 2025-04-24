import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteResolver} from '../../../shared/resolver/route.resolver';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {MerchantCategoryIndexComponent} from '../index/merchant-category.index.component';
import {MerchantCategoryListComponent} from '../list/merchant-category.list.component';
import {MerchantCategoryOpsComponent} from '../ops/merchant-category.ops.component';
import {PermissionGuard} from '../../../shared/guard/permission.guard';

export const routes: Routes = [{
    path: '',
    component: MerchantCategoryIndexComponent,
    pathMatch: 'prefix',
    data: {
        pageName: APP_NAVIGATION.merchantCategory,
        title: 'app.page.' + APP_NAVIGATION.merchantCategory + '.name',
        description: 'app.page.' + APP_NAVIGATION.merchantCategory + '.description',
        icon: 'menu'
    },
    children: [{
        path: '',
        component: MerchantCategoryListComponent,
        data: {pageName: APP_NAVIGATION.merchantCategory, title: 'app.general.button.all', crudOps: APP_NAVIGATION.permissions.list},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.add,
        component: MerchantCategoryOpsComponent,
        data: {pageName: APP_NAVIGATION.merchantCategory, title: 'app.general.button.add', crudOps: APP_NAVIGATION.permissions.add},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.edit + APP_NAVIGATION.resolverParam,
        component: MerchantCategoryOpsComponent,
        data: {pageName: APP_NAVIGATION.merchantCategory, title: 'app.general.button.edit', crudOps: APP_NAVIGATION.permissions.edit},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }, {
        path: APP_NAVIGATION.permissions.view + APP_NAVIGATION.resolverParam,
        component: MerchantCategoryOpsComponent,
        data: {pageName: APP_NAVIGATION.merchantCategory, title: 'app.general.button.view', crudOps: APP_NAVIGATION.permissions.view},
        resolve: {object: RouteResolver},
        canActivate: [PermissionGuard]
    }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class MerchantCategoryRouteModule {
}
