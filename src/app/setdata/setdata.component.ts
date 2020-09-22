import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-setdata',
  templateUrl: './setdata.component.html',
  styleUrls: ['./setdata.component.css'],
})
export class SetdataComponent implements OnInit {
  public regForm: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  get f() {
    return this.regForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.regForm.valid == true) {
      let data = this.regForm.value;
      console.log(data);
    }
  }
}
