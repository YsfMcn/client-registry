import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-registry',
  templateUrl: './client-registry.component.html',
  styleUrls: ['./client-registry.component.css']
})
export class ClientRegistryComponent implements OnInit {

  client: IClient = {
    name: 'Alex',
    notificationsOn: false,
    accountStyle: 'Basic',
    clientType: 'Personal',
    notes: 'some notes... '
  }

  startDate!: Date;
  startTime!: Date;
  clientRating = 0;
  maxRating = 10;
  originalClient: IClient = { ...this.client };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes!: Observable<string[]>;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.clientService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    if (form.valid) {
      this.clientService.postClientRegistryForm(this.client).subscribe({
       next: result => console.log('success: ', result),
        error: error => this.onHttpError(error)
      });
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors"
    }
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

}
