import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API_METHOD, APP_NAVIGATION} from '../../shared/routes/navigation.constant';
import {CRUDService} from '../../shared/services/crud.service';


@Component({
    templateUrl: './activate-account.component.html',
    standalone: false
})
export class ActivateAccountComponent {

    id: string;
    isActivated = false;

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        public crudService: CRUDService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.crudService.getData(APP_NAVIGATION.password + API_METHOD.activateAccount,
            [{key: 'id', value: this.id}])
            .subscribe(status => {
                if (Boolean(status)) {
                    this.isActivated = true;
                }
            });
    }

    redirectLoginPage(): void {
        this.router.navigate([APP_NAVIGATION.authentication]);
    }
}
