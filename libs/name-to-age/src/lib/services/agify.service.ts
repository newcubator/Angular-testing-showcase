import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AgifyResponse, defaultResponse } from '../models/agifyResponse.model';

@Injectable({
    providedIn: 'root'
})
export class AgifyService {

    constructor(private httpClient: HttpClient) { }

    getAge(name: string): Observable<number> {
        const params = new HttpParams().set('name', name);
        return this.httpClient.get<AgifyResponse>(`https://api.agify.io`, { params }).pipe(
            map(({ age }: AgifyResponse) => age),
            catchError(() => of(defaultResponse.age)
            ));
    }
}
