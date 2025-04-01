import {GenericModelType} from '../../../shared/interfaces/Generic.model.type';

export interface IRole extends GenericModelType {
    selectedOrganizationIds?: string[];
    selectedPermissionIds?: string[];
    selectedMenuIds?: string[];
}
