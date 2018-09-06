import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact/contact.service';
import { ToastNotificationService } from '../../../services/common/toast-notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  formData;
  submitted = false;
  isSuccess = false;
  public successMessage = 'Thank you for contacting us. <br> We will call you back shortly!';
  heroForm: FormGroup;

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
    this.heroForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      title: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      description: [null, [Validators.required]],
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.heroForm.valid) {

      this.contactService.postData(this.heroForm.value).subscribe(
        response => {
          this.resultStatus = response.status;
          this.resultMessage = response.message;

          if (response.status) {
            this.isSuccess = true;
            this.result = response.data;

            this.toast.title = 'Success';
            this.toast.body = this.resultMessage;
            // this.toast.onSuccess();

          } else {
            this.isSuccess = false;
            this.resultErrorString = response.error_string;
            this.resultInputError = response.inputerror;

            this.toast.title = 'Warning';
            this.toast.body = this.resultMessage;
            // this.toast.onWarning();
          }


        },
        err => {
          console.log(this.heroForm.controls);
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
