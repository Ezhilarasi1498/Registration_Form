import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import{RegisterServiceService} from 'src/app/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      public registerSevice:RegisterServiceService,
      public router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            date:[''],
            gender:[''],
            // languages:this.formBuilder.array([]),
            languages:[this.langSelected],
            skills:[this.selected.values],
            homeAddress:[''],
            officeAddress:[''],
            description:['']
        });
    }

  categories = [
    "Java", "PHP", "Angular", ".net","React"
  ];
    
  selected = [];
  langSelected=[];

  languageList = [ "Tamil", "English", "Hindi"];

  
  

  onCheckboxChange(e) {
    const checkArray: FormArray = this.registerForm.get('languages') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.registerForm.value);
    
    if (this.registerForm.invalid) {
        return;
    }

    this.registerSevice.createUsers(this.registerForm.value).subscribe((response) => {
      this.router.navigate(['/list'])
    })

    
}

}
