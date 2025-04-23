import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CRUDService} from '../../shared/services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ISignup} from './signup.model';
import {NzModalService} from 'ng-zorro-antd/modal';
import {TranslateService} from '@ngx-translate/core';
import {API_METHOD, APP_NAVIGATION} from '../../shared/routes/navigation.constant';
import {AlertService} from '../../shared/services/alert.service';


@Component({
    templateUrl: './sign-up-1.component.html',
    standalone: false
})

export class SignUp1Component {

    signUpForm: UntypedFormGroup;
    signupObj: ISignup;
    isSignup = false;
    isModelVisible = false;

    submitForm(): void {
        Object.keys(this.signUpForm.controls).forEach(controlName => {
            this.signUpForm.controls[controlName].markAsDirty();
            this.signUpForm.controls[controlName].updateValueAndValidity();
        });
        if (this.signUpForm.valid) {
            this.signupObj = this.signUpForm.value;
            this.signupObj.countryCode = '+91';
            // console.log(this.signupObj);
            this.crudService
                .post(APP_NAVIGATION.signup, this.signupObj)
                .subscribe({
                    error: (err) => {
                        this.alertService.alertHttpErrorResp(err, APP_NAVIGATION.signup);
                    },
                    complete: () => {
                        this.modal.success({
                            nzTitle: this.translate.instant('app.page.sign-up.signup-success-title'),
                            nzContent: this.translate.instant('app.page.sign-up.signup-success-hint'),
                            nzOnOk: () => this.handleOk(),
                            nzOnCancel: () => this.handleCancel()
                        });
                    },
                });
        }
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.confirmPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return {confirm: true, error: true};
        }
    };

    constructor(
        private modal: NzModalService,
        public router: Router,
        private route: ActivatedRoute,
        private fb: UntypedFormBuilder,
        private crudService: CRUDService,
        private translate: TranslateService,
        private alertService: AlertService) {
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            name: [null, [Validators.required]],
            organizationCode: [null, [Validators.required]],
            organizationName: [null, [Validators.required]],
            userId: [null, [Validators.required]],
            email: [null, [Validators.required]],
            mobileNumber: [null, [Validators.required]],
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required, this.confirmationValidator]],
            status: [true]
        });
        this.crudService.getData(APP_NAVIGATION.user + API_METHOD.count).subscribe(count => {
            if (Number(count) === 0) {
                this.isSignup = true;
            }
        });
    }

    redirectLoginPage(): void {
        this.router.navigate(['../'], {relativeTo: this.route, skipLocationChange: false});
    }

    handleOk(): void {
        this.isModelVisible = false;
        this.router.navigate(['../'], {relativeTo: this.route, skipLocationChange: false});
    }

    handleCancel(): void {
        this.isModelVisible = false;
    }
}
