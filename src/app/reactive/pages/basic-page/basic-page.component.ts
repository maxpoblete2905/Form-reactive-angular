import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  public myFrom: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['0', [Validators.required, Validators.min(0)]],
    inStorage: ['0', [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    // iniciar campos

    // this.myFrom.reset({
    //   name: '',
    //   price: '0',
    //   inStorage: '0'
    // })
  }

  isValidfield(field: string): boolean | null {
     return this.myFrom.controls[field].errors
      && this.myFrom.controls[field].touched
  }

  getFieldError(field: string): string | null {

    if(!this.myFrom.controls[field]) return null;

    const errors = this.myFrom.controls[field].errors || {}

    for (const key of Object.keys(errors)) {

      // console.log(key);

      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters.`;
        case 'min':
          return 'el valor minimo es 0';
      }

    }
    return null
  }

  onSave(): void {
    if(this.myFrom.invalid) {

      this.myFrom.markAllAsTouched();
      return
    }

    console.log(this.myFrom.value);

    this.myFrom.reset({
      price: '0', inStorage: '0'
    })
  }

}
