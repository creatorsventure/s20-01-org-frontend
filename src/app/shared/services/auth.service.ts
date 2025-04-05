import {Injectable} from '@angular/core';
import {catchError, map, Observable, throwError} from 'rxjs';
import {API_METHOD, APP_NAVIGATION, AUTH_SERVICE_REQUEST_TYPE, LOCAL_STORAGE_KEYS} from '../routes/navigation.constant';
import {StorageService} from './storage.service';
import {APIResponseType, IAPIResponse} from '../interfaces/apt.response.type';
import {HttpClient, HttpStatusCode} from '@angular/common/http';
import {Router} from '@angular/router';
import {IAuthInfo} from '../../authentication/login-1/auth-info.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

    private endPoint: string;

    constructor(
        private http: HttpClient,
        private router: Router,
        private storage: StorageService) {
        this.endPoint = environment.uamApiURL;
    }

    isLoggedIn(): boolean {
        return !!this.storage.get(LOCAL_STORAGE_KEYS.AUTH_INFO);
    }

    public login(dto: any): Observable<boolean> {
        return this.post(
            APP_NAVIGATION.authentication + API_METHOD.login,
            dto,
            AUTH_SERVICE_REQUEST_TYPE.LOGIN
        );
    }

    public logout(): Observable<boolean> {
        const authInfo = this.storage.get(LOCAL_STORAGE_KEYS.AUTH_INFO);
        return this.post(
            APP_NAVIGATION.authentication + API_METHOD.logout,
            authInfo,
            AUTH_SERVICE_REQUEST_TYPE.LOGOUT
        );
    }

    public refreshToken(authInfo: IAuthInfo): Observable<IAuthInfo> {
        return this.post(
            APP_NAVIGATION.authentication + API_METHOD.refreshToken,
            authInfo,
            AUTH_SERVICE_REQUEST_TYPE.LOGOUT
        );
    }

    public loadRoleMenu(): Observable<any> {
        const authInfo = this.storage.get(LOCAL_STORAGE_KEYS.AUTH_INFO);
        return this.post(
            APP_NAVIGATION.role + API_METHOD.loadRoleMenu,
            authInfo.roleIds,
            AUTH_SERVICE_REQUEST_TYPE.LOAD_ROLE_MENU
        );
    }

    private post(pageName: string, dto: any, type: number): Observable<any> {
        return this.http
            .post<IAPIResponse>(this.endPoint + pageName, dto)
            .pipe(
                map((apiResponse) => {
                    if (
                        apiResponse.status &&
                        apiResponse.type === APIResponseType.OBJECT_ONE
                    ) {
                        if (apiResponse.object && type === AUTH_SERVICE_REQUEST_TYPE.LOGIN) {
                            this.storage.clearStorage();
                            this.storage.store(LOCAL_STORAGE_KEYS.AUTH_INFO,
                                apiResponse.object);
                            return true;
                        } else if (apiResponse.object && type === AUTH_SERVICE_REQUEST_TYPE.LOGOUT) {
                            this.storage.clearStorage();
                            return Boolean(apiResponse.object);
                        } else if (apiResponse.object && type === AUTH_SERVICE_REQUEST_TYPE.REFRESH_TOKEN) {
                            this.storage.clearStorage();
                            this.storage.store(LOCAL_STORAGE_KEYS.AUTH_INFO,
                                apiResponse.object);
                            return apiResponse.object;
                        } else if (apiResponse.object && type === AUTH_SERVICE_REQUEST_TYPE.LOAD_ROLE_MENU) {
                            return apiResponse.object;
                        }
                        return false;
                    }
                }),
                catchError((err) => {
                    if (err && err.status === HttpStatusCode.ServiceUnavailable) {
                        this.router.navigate([APP_NAVIGATION.info]);
                    }
                    return throwError(() => err);
                })
            );
    }
}
