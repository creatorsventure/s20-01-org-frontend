import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators,} from '@angular/forms';
import {CRUDService} from '../../shared/services/crud.service';
import {API_METHOD, APP_NAVIGATION} from '../../shared/routes/navigation.constant';
import {IAuthInfo} from './auth-info.model';
import {NzModalService} from 'ng-zorro-antd/modal';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
    templateUrl: './login-1.component.html',
    standalone: false
})
export class Login1Component {
    loginForm: UntypedFormGroup;
    isSignup = false;
    authInfo: IAuthInfo;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[i].markAsDirty();
            this.loginForm.controls[i].updateValueAndValidity();
        }
        if (this.loginForm.valid) {
            this.authInfo = this.loginForm.value;
            this.authService.login(this.authInfo)
                .subscribe({
                    error: (err) => {
                        console.log('login error: ', err);
                        this.modal.error({
                            nzTitle: this.translate.instant('app.page.login.signup-failure-title'),
                            nzContent: err,
                        });
                    },
                    complete: () => {
                        this.router.navigate([APP_NAVIGATION.dashboard]);
                    },
                });
        }
    }

    constructor(
        private router: Router,
        private fb: UntypedFormBuilder,
        public crudService: CRUDService,
        public authService: AuthService,
        private modal: NzModalService,
        private translate: TranslateService,
    ) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userId: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
        this.crudService.getData(APP_NAVIGATION.user + API_METHOD.count)
            .subscribe(count => {
                if (Number(count) === 0) {
                    this.isSignup = true;
                }
            });
    }
}
