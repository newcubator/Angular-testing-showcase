import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AgifyService } from '@ts/name-to-age';
import { Observable } from 'rxjs';

@Component({
    selector: 'ts-name-to-age',
    templateUrl: './name-to-age.component.html',
    styleUrls: ['./name-to-age.component.scss'],
})
export class NameToAgeComponent {
    searchForm: UntypedFormGroup = this.formBuilder.group({
        name: ['', Validators.required]
    });

    age$?: Observable<number>;

    constructor(private formBuilder: UntypedFormBuilder, private agifyService: AgifyService) {}

    onSubmit() {
        this.age$ = this.agifyService.getAge(this.searchForm.get('name')!.value);
    }
}
