import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact/contact.service';
import { ToastNotificationService } from '../../../services/common/toast-notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  formData;
  submitted = false;
  isSuccess = false;
  public successMessage = 'Thank you for subscribe!';
  subsForm: FormGroup;

  result;
  resultStatus;
  resultMessage;
  resultErrorString;
  resultInputError;
  fieldRequiredError = 'Field is required!';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toast: ToastNotificationService
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.subsForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.subsForm.valid) {

      this.contactService.postSubscribe(this.subsForm.value).subscribe(
        response => {
          this.resultStatus = response.status;
          this.resultMessage = response.message;

          if (response.status) {
            this.isSuccess = true;
            this.toast.title = 'Success';
            this.toast.body = this.resultMessage;
            // this.toast.onSuccess();

          } else {
            this.isSuccess = false;
            this.resultErrorString = response.error_string;
            this.resultInputError = response.inputerror;
            this.fieldRequiredError = response.error_string[0];
            this.toast.title = 'Warning';
            this.toast.body = this.resultMessage;
            // this.toast.onWarning();
          }


        },
        err => {
          console.log(this.subsForm.controls);
          console.error(err);
          // this.toast.title = 'Error';
          // this.toast.body = err;
          // this.toast.onError();
          this.resultStatus = false;
        }
      );

    } else {
      this.resultMessage = 'Validation Error!';
      this.resultStatus = false;
      this.toast.title = 'Warning';
      this.toast.body = this.resultMessage;
      // this.toast.onWarning();
    }

  }

}
