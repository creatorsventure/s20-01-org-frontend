import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';
import {CryptoService} from './crypto.service';

@Injectable({providedIn: 'root'})
export class StorageService {

    constructor(
        private localStorage: LocalStorageService,
        private cryptoService: CryptoService
    ) {
    }

    public store(key: string, data: string): void {
        this.localStorage.set(key.toUpperCase(),
            this.cryptoService.encrypt(JSON.stringify(data)));
    }

    public get(key: string): any {
        const value = this.localStorage.get(key);
        if (!value || value === 'undefined') {
            return null;
        }
        try {
            return JSON.parse(this.cryptoService.decrypt(this.localStorage.get(key)));
        } catch (error) {
            console.error('StorageService.get: ', error);
        }
    }

    public remove(key: string): void {
        this.localStorage.remove(key.toUpperCase());
    }

    public clearStorage(): void {
        this.localStorage.clear();
    }
}
