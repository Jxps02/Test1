import { Component } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  requester?: string; // Add the ? modifier to make the property optional
  title?: string; // Add the ? modifier to make the property optional
  type?: string; // Add the ? modifier to make the property optional
  deadline?: string; // Add the ? modifier to make the property optional

  // Define the submitRequest method
  submitRequest() {
    // Logic to handle form submission
  }
}
