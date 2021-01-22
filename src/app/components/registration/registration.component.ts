import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

    onSubmit() {
      console.log(this.f.firstName.invalid)
        this.submitted = true;
        
        if (this.form.invalid) {
            return;
        }
    }

    getFirstNameError() {
        if(this.form.controls.firstName.hasError('required')){
          return 'First Name Is required'
        }
    }
}