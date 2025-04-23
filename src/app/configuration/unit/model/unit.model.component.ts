import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IUnit extends GenericModelType {
    unitCode: string;
    unitId: string;
    legalName?: string;
    address: string;
    bankIdentificationCode: string;
    type: string;
    selectedActionIds: string[];
    selectedCurrencyIds: string[];
    selectedEngineIds: string[];
    selectedOptionsId: string;
    adminName: string;
    adminEmail: string;
}
