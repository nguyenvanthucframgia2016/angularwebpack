import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    contactForm: FormGroup;
    submitted: boolean = false;
    contact: ContactForm = {
        firstname: 'Thuc',
        lastname: 'Nguyen Van',
        address: {
            city: 'Ha Noi',
            street: 'Ho Tung Mau',
            postcode: '100000'
        }
    };

    constructor(private fb: FormBuilder) {
        this.contactForm = fb.group({
            firstname: ['', [Validators.required, Validators.minLength(5)]],
            lastname: [],
            address: fb.group(
{                city: [],
                street: [],
                postcode: []
            })
        });
    }

    onSubmit() {
        if (!this.contactForm.valid) {
            this.submitted = true;
            return;
        } else {
            console.log(this.contactForm.value);
            console.log(this.contact);
        }
    }
}

class ContactForm {
    firstname: string;
    lastname: string;
    address: {
        city: string,
        street: string,
        postcode: string
    }
}
