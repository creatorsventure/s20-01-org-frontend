import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {APP_NAVIGATION} from '../../shared/routes/navigation.constant';

@Component({
    templateUrl: './error-1.component.html',
    standalone: false
})

export class Error1Component {
    constructor(private router: Router) {
    }

    redirectLogin(): void {
        this.router.navigate([APP_NAVIGATION.authentication]);
    }
}
