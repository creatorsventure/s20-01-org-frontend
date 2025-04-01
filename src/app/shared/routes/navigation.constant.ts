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
    login: 'authentication',
    dashboard: 'dashboard',
    governance: 'governance',
    menu: 'menu',
    organization: 'organization',
    permission: 'permission',
    role: 'role',
    user: 'user',
    password: 'password'
};

export const API_METHOD = {
    list: '/list',
    create: '/create',
    read: '/read-one',
    update: '/update',
    delete: '/delete',
    changeStatus: '/update-status',
    resendActivationMail: 'resend-activation-mail',
    menuTree: '/menu-tree',
    idNameMap: '/read-id-name-map'
};
