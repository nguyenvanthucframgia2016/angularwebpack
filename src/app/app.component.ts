import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.contactForm = fb.group({
            firstname: ['', [Validators.required, Validators.minLength(5)]],
            lastname: [],
            address: fb.group({
                city: [],
                street: [],
                postcode: []
            })
        });
    }

    onSubmit() {
        console.log(this.contactForm.value);
    }
}
