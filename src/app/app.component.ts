import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    contact: ContactForm = {
        firstname: 'Thuc',
        lastname: 'Nguyen Van',
        address: {
            city: 'Ha noi',
            street: 'Ho Tung Mau',
            postcode: '100000'
        }
    };

    onSubmit(contactForm: any) {
        console.log(contactForm.value);
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
