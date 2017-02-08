import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    contact: Contact = {
        firstname: 'Thuc',
        lastname: 'po rao',
        address: {
            city: 'Ha noi',
            street: 'Ho Tung Mau',
            pincode: '100000'
        }
    };

    onSubmit(contactForm: any) {
        console.log(contactForm.value);
        // Khi dung two-way binding thi gia tri cua contactForm va this.contact la nhu nhau
        console.log(this.contact);
    }
}

class Contact {
    firstname: string;
    lastname: string;
    address: {
        city: string,
        street: string,
        pincode: string
    }
}