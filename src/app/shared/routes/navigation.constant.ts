export const APP_NAVIGATION = {
    permissions: {
        list: 'list',
        add: 'add',
        edit: 'edit',
        view: 'view',
        delete: 'delete',
        approve: 'approve',
        reject: 'reject',
        resolverParam: '/:id'
    },
    error: 'authentication/error-1',
    info: 'authentication/error-2',
    authentication: 'authentication',
    signup: 'sign-up',
    dashboard: 'dashboard',
    governance: 'governance',
    menu: 'menu',
    organization: 'organization',
    permission: 'permission',
    role: 'role',
    user: 'user',
    password: 'password',
    configuration: 'configuration',
    unit: 'unit'
};

export const API_METHOD = {
    login: '/login',
    refreshToken: '/refresh-token',
    logout: '/logout',
    list: '/list',
    create: '/create',
    read: '/read-one',
    update: '/update',
    delete: '/delete',
    changeStatus: '/update-status',
    resendPasswordMail: '/resend-password-email',
    menuTree: '/menu-tree',
    idNameMap: '/read-id-name-map',
    count: '/count',
    activateAccount: '/activate-account',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    loadRoleMenu: '/load-role-menu',
};

export const LOCAL_STORAGE_KEYS = {
    AUTH_INFO: 'AUTH_INFO'
};

export const AUTH_SERVICE_REQUEST_TYPE = {
    LOGIN: 1,
    LOGOUT: 2,
    REFRESH_TOKEN: 3,
    LOAD_ROLE_MENU: 4
};
