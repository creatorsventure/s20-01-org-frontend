import {Routes} from '@angular/router';
import {APP_NAVIGATION} from './navigation.constant';

export const FULL_LAYOUT_ROUTES: Routes = [
    {
        path: APP_NAVIGATION.login,
        loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];
