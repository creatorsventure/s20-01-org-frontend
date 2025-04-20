import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IEngine extends GenericModelType {
    type: number;
    serviceURL: string;
    timeout: number;
    priority: number;
}
