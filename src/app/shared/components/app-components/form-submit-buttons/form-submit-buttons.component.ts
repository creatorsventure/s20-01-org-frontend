import {Component, Host, Input, Optional} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {updateFormPristineAndUntouched} from '../../../utils/utils';
import {APP_NAVIGATION} from '../../../routes/navigation.constant';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from "../../../services/alert.service";

@Component({
    selector: 'app-form-submit-buttons',
    templateUrl: './form-submit-buttons.component.html',
    standalone: false
})
export class FormSubmitButtonsComponent {
    @Input()
    public crudForm: FormGroup;

    @Input()
    public crudOps: string;

    @Input()
    public pageName: string;

    @Input()
    public parent: string;

    @Input()
    public backButtonDisplay = true;

    private _originalData: any;

    public permissions: any = APP_NAVIGATION.permissions;

    constructor(public router: Router, private route: ActivatedRoute, private alertService: AlertService) {
    }

    get isEditModeInternal(): boolean {
        return this.crudOps === this.permissions.edit;
    }

    @Input()
    set originalDataInput(data: any) {
        this._originalData = data;
    }

    reset(): void {

        if (this.isEditModeInternal && this._originalData && Object.keys(this._originalData).length > 0) {
            const resetData = Object.fromEntries(
                Object.keys(this.crudForm.controls).map(key => [key, this._originalData[key] ?? null])
            );
            this.crudForm.reset(resetData);
        } else {
            updateFormPristineAndUntouched(this.crudForm);
        }
    }

    redirectToListPage(): void {
        if (this.crudOps === this.permissions.add) {
            this.router.navigate(['../'], {relativeTo: this.route, skipLocationChange: true});
        } else if (this.crudOps === this.permissions.view || this.crudOps === this.permissions.edit) {
            this.router.navigate(['../../'], {relativeTo: this.route, skipLocationChange: true});
        } else {
            console.log('redirectToListPage invalid crudOps! ', this.crudOps);
        }
    }

}
