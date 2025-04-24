export interface IAuthInfo {
    userId: string;
    name: string;
    password: string;
    organizationId: string;
    roleId: string;
    permissions: string[];
    email?: string;
    token?: string;
    refreshToken?: string;
}
