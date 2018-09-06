import { Component, OnInit } from '@angular/core';
import { LeadFormService } from '../../../services/lead-form/lead-form.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent implements OnInit {

  myOptions: IMultiSelectOption[];

  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    containerClasses: 'dropdown',
    buttonClasses: 'btn btn-light btn-block',
    dynamicTitleMaxItems: 2,
    pullRight: false,
    displayAllSelectedText: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Services',
    allSelected: 'All selected',
  };

  optionsModel: number[] = [];


  formData;
  submitted = false;
  isSuccess = false;
  public successMessage = 'Thank you for contacting us. We will call you back shortly!';
  heroForm: FormGroup;

  result;
  resultStatus;
  resultMessage;
  resultErrorString;
  resultInputError;
  fieldRequiredError = 'Field is required!';

  constructor(
    private fb: FormBuilder,
    private leadFormService: LeadFormService
  ) {
    this.bindServices();
    console.log(this.myOptions);
    this.createForm();
  }

  ngOnInit() {


  }


  bindServices() {
    this.leadFormService.getType().subscribe(
      response => {
        this.myOptions = response.data.records;
        // response.data.records.forEach(i => {
        //   this.myOptions.push(
        //     {
        //       id: Number(i.id),
        //       name: i.name
        //     }
        //   );
        // });
      },
      err => {
        console.error(err);
      },
    );
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      company: [null, [Validators.required]],
      remarks: [null, [Validators.required]],
      categories: [this.optionsModel, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.heroForm.valid) {
      this.leadFormService.postData(this.heroForm.value).subscribe(
        response => {
          this.resultStatus = response.status;
          this.resultMessage = response.message;

          if (response.status) {
            this.isSuccess = true;
            this.result = response.data;
            this.heroForm.reset();
          } else {
            this.isSuccess = false;
            this.resultErrorString = response.error_string;
            this.resultInputError = response.inputerror;
          }


        },
        err => {
          console.log(this.heroForm.controls);
          console.error(err);
          this.resultStatus = false;
        }
      );

    } else {
      this.resultMessage = 'Validation Error!';
      this.resultStatus = false;
    }

  }

}
