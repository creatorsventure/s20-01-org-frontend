import {Routes} from '@angular/router';
import {APP_NAVIGATION} from './navigation.constant';
import {AuthGuard} from '../guard/auth.guard';

export const COMMON_LAYOUT_ROUTES: Routes = [
    {
        path: APP_NAVIGATION.dashboard,
        loadChildren: () =>
            import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: {
            headerDisplay: 'none',
        }, // canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.organization,
        loadChildren: () =>
            import('../../governance/organization/organization.module').then((m) => m.OrganizationModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.permission,
        loadChildren: () =>
            import('../../governance/permission/permission.module').then((m) => m.PermissionModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.menu,
        loadChildren: () =>
            import('../../governance/menu/menu.module').then((m) => m.MenuModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.role,
        loadChildren: () =>
            import('../../governance/role/role.module').then((m) => m.RoleModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.user,
        loadChildren: () =>
            import('../../governance/user/user.module').then((m) => m.UserModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.governance + '/' + APP_NAVIGATION.password,
        loadChildren: () =>
            import('../../governance/password/password.module').then((m) => m.PasswordModule),
        data: {
            parent: APP_NAVIGATION.governance,
            title: 'app.page.' + APP_NAVIGATION.governance + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.scheme,
        loadChildren: () =>
            import('../../configuration/scheme/scheme.module').then((m) => m.SchemeModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.merchantCategory,
        loadChildren: () =>
            import('../../configuration/merchant-category/merchantCategory.module').then((m) => m.MerchantCategoryModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.engine,
        loadChildren: () =>
            import('../../configuration/engine/engine.module').then((m) => m.EngineModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.option,
        loadChildren: () =>
            import('../../configuration/option/option.module').then((m) => m.OptionModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.currency,
        loadChildren: () =>
            import('../../configuration/currency/currency.module').then((m) => m.CurrencyModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.action,
        loadChildren: () =>
            import('../../configuration/action/action.module').then((m) => m.ActionModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
    {
        path: APP_NAVIGATION.configuration + '/' + APP_NAVIGATION.unit,
        loadChildren: () =>
            import('../../configuration/unit/unit.module').then((m) => m.UnitModule),
        data: {
            parent: APP_NAVIGATION.configuration,
            title: 'app.page.' + APP_NAVIGATION.configuration + '.name',
        },
        canActivate: [AuthGuard]
    },
];
