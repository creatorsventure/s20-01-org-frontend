import {Injectable} from '@angular/core';
import {CryptoService} from './crypto.service';

@Injectable({providedIn: 'root'})
export class StorageService {
    private storage: Storage;

    constructor(
        private cryptoService: CryptoService
    ) {
        this.storage = sessionStorage;
    }

    public store(key: string, data: string): void {
        this.storage.setItem(key.toUpperCase(),
            this.cryptoService.encrypt(JSON.stringify(data)));
    }

    public storePlain(key: string, data: string): void {
        this.storage.setItem(key.toUpperCase(),
            JSON.stringify(data));
    }

    public get(key: string): any {
        const value = this.storage.getItem(key);
        if (!value || value === 'undefined') {
            return null;
        }
        try {
            return JSON.parse(this.cryptoService.decrypt(this.storage.getItem(key)));
        } catch (error) {
            console.error('StorageService.get: ', error);
        }
    }

    public getPlain(key: string): any {
        return this.storage.getItem(key);
    }

    public remove(key: string): void {
        this.storage.removeItem(key.toUpperCase());
    }

    public clearStorage(): void {
        this.storage.clear();
    }
}
