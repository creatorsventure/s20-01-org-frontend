import {GenericModelType} from '../../shared/interfaces/Generic.model.type';

export interface ISignup extends GenericModelType {
    userId: string;
    organizationCode: string;
    organizationName: string;
    password: string;
    mobileNumber: string;
    countryCode: string;
    email: string;
}
