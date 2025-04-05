import {Component} from '@angular/core';
import {APP_NAVIGATION} from '../../shared/routes/navigation.constant';
import {Router} from '@angular/router';

@Component({
    templateUrl: './error-2.component.html',
    standalone: false
})

export class Error2Component {
    constructor(private router: Router) {
    }

    redirectLogin(): void {
        this.router.navigate([APP_NAVIGATION.authentication]);
    }
}
