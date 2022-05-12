import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

describe('Async operations', () => {
    it('should show usage of fakeAsync',   fakeAsync(() => {
        let a = 1;
        of(1).subscribe(() => {
            a += 1;
            expect(a).toBe(2);
        });
    }));
});
