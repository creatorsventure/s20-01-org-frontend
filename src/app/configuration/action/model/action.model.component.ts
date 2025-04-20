import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IAction extends GenericModelType {
    actionCode: string;
    actionId: number;
    partial: boolean;
    permitExcess: boolean;
}
