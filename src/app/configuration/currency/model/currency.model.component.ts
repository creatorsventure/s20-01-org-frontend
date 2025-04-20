import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface ICurrency extends GenericModelType {
    symbol: string;
    decimalPlaces: number;
}
