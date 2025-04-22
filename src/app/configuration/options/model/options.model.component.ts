import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IOptions extends GenericModelType {
    captcha: boolean;
    otpAuthentication: boolean;
    tokenization: boolean;
    cvvSecurity: boolean;
    makerCheckerMode: boolean;
    masking: boolean;
}
