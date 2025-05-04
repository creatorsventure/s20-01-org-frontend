import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IOptions extends GenericModelType {
    enforce: boolean;
    captcha: boolean;
    transactionOTP: boolean;
    loginOTP: boolean;
    tokenization: boolean;
    cvvSecurity: boolean;
    makerCheckerMode: boolean;
    masking: boolean;
}
