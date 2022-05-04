import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AgifyResponse, defaultResponse } from '../models/agifyResponse.model';

import { AgifyService } from './agify.service';

describe('AgifyService', () => {
    let service: AgifyService;
    let httpMock: HttpTestingController;

    const RESPONSE_EXAMPLE: AgifyResponse = {
        name: 'dennis',
        count: 237863,
        age: 33
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(AgifyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return age by a given name', fakeAsync(() => {
        const name = 'dennis';
        service.getAge(name).subscribe((age: number) => {
            expect(age).toEqual(33);
        });

        const request = httpMock.expectOne(
            `https://api.agify.io?name=${name}`
        );
        request.flush(RESPONSE_EXAMPLE);
        tick();
    }));

    it('should return an error response', fakeAsync(() => {
        const mockError = new ProgressEvent('error');

        const name = 'dennis';
        service.getAge(name).subscribe((age: number) => {
            expect(age).toEqual(defaultResponse.age);
        });

        const request = httpMock.expectOne(
            `https://api.agify.io?name=${name}`
        );
        request.error(mockError);
        tick();
    }));
});
