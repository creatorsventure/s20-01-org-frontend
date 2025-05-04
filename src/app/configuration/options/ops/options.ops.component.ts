import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';

@Component({selector: 'app-option-ops', templateUrl: './options.ops.component.html', styles: [], standalone: false})
export class OptionsOpsComponent extends OpsAbstract implements OnInit {

    constructor(public override fb: FormBuilder,
                public override activatedRoute: ActivatedRoute,
                public override crudService: CRUDService,
                public override appCtrlService: AppControlService,
                public override alertService: AlertService,
                public override router: Router) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService, router);
    }

    ngOnInit(): void {
        super.init();
        this.crudForm = this.fb.group({
            enforce: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.enforce),
            captcha: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.captcha),
            transactionOTP: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.transactionOTP),
            loginOTP: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.loginOTP),
            tokenization: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.tokenization),
            cvvSecurity: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.cvvSecurity),
            makerCheckerMode: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.makerCheckerMode),
            masking: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.switch, this.object?.masking),
        });
    }

    override customUpdateValidations(): boolean {
        return this.checkEnforcedValues();
    }

    override customCreateValidations(): boolean {
        return this.checkEnforcedValues();
    }

    override customPostSuccessOps(): void {
    }

    override customPostFailureOps(): void {
    }

    private checkEnforcedValues(): boolean {
        if (!this.crudForm.get('enforce')?.value) {
            if (this.crudForm.get('cvvSecurity')?.value ||
                this.crudForm.get('transactionOTP')?.value) {
                this.alertService.error('app.message.failure.f007', true);
                return false;
            }
            return true;
        }
        return true;
    }
}
