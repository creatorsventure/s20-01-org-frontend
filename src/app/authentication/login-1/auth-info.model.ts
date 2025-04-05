export interface IAuthInfo {
    userId: string;
    password: string;
    organizationIds?: string[];
    roleIds?: string[];
    email?: string;
    token?: string;
    refreshToken?: string;
}
