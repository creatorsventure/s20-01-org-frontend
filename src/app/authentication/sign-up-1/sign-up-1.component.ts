import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CRUDService} from '../../shared/services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ISignup} from './signup.model';


@Component({
    templateUrl: './sign-up-1.component.html',
    standalone: false
})

export class SignUp1Component {

    signUpForm: UntypedFormGroup;
    signupObj: ISignup;

    submitForm(): void {
        for (const i in this.signUpForm.controls) {
            this.signUpForm.controls[i].markAsDirty();
            this.signUpForm.controls[i].updateValueAndValidity();
        }
        if (this.signUpForm.valid) {
            this.signupObj = this.signUpForm.value;
            this.signupObj.countryCode = '+91';
            console.log(this.signupObj);
            this.crudService
                .create('sign-up', this.signupObj)
                .subscribe({
                    error: (err) => {
                        alert(err.message);
                    },
                    complete: () => {
                        console.log('signup successful');
                    },
                });
        }
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return {confirm: true, error: true};
        }
    };

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private fb: UntypedFormBuilder,
        private crudService: CRUDService) {
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
            checkPassword: [null, [Validators.required, this.confirmationValidator]],
            status: [true]
        });
    }

    redirectLoginPage(): void {
        this.router.navigate(['../'], {relativeTo: this.route, skipLocationChange: true});
    }
}
