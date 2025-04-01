import {Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {TranslateService} from '@ngx-translate/core';
import {APIResponseType} from '../interfaces/apt.response.type';

@Injectable({providedIn: 'root'})
export class NotificationService1 {

    constructor(private notification: NzNotificationService,
                private translate: TranslateService) {
    }

    public notifyHttpErrorResp(err: any, pageName: string): void {
        if (err?.error?.type === APIResponseType.MESSAGE_ACTUAL) {
            this.error(err?.error?.object.message, false);
        } else if (err?.error?.type === APIResponseType.MESSAGE_CODE) {
            this.error(err?.error?.message, true);
        } else if (err?.error?.type === APIResponseType.MESSAGE_CODE_LIST) {
            err?.error?.object.forEach((element) => {
                if (element && element.defaultMessage) {
                    this.error(
                        (element.field
                            ? this.translate.instant(
                            'app.page.' + pageName + '.label.' + element.field
                        ) + ': '
                            : '') + this.translate.instant(element.defaultMessage),
                        false
                    );
                }
            });
        } else {
            console.error('Error:NotificationService:handleHttpErrorResp: ', err);
            this.error('app.message.generic.refer-console', true);
        }
    }

    public publishStatus(status: boolean, translate: boolean = true): void {
        if (status) {
            this.success('app.message.success.000', translate);
        } else {
            this.error('app.message.error.000', translate);
        }
    }

    success(msg: string, translate: boolean, options?: any): void {
        this.notification.create(
            'success',
            this.translate.instant('app.message.generic.success'),
            translate ? this.translate.instant(msg) : msg,
            {
                nzStyle: {
                    backgroundColor: '#F6FFED',
                },
            }
        );
    }

    error(msg: string, translate: boolean, options?: any): void {
        this.notification.create(
            'error',
            this.translate.instant('app.message.generic.error'),
            translate ? this.translate.instant(msg) : msg,
            {
                nzStyle: {
                    backgroundColor: '#FFF2F0',
                },
            }
        );
    }

    warn(msg: string, translate: boolean, options?: any): void {
        this.notification.create(
            'warning',
            this.translate.instant('app.message.generic.warning'),
            translate ? this.translate.instant(msg) : msg,
            {
                nzStyle: {
                    backgroundColor: '#FFFBE6',
                },
            }
        );
    }

    info(msg: string, translate: boolean, options?: any): void {
        this.notification.create(
            'warning',
            this.translate.instant('app.message.generic.info'),
            translate ? this.translate.instant(msg) : msg,
            {
                nzStyle: {
                    backgroundColor: '#E6F7FF',
                },
            }
        );
    }


}
