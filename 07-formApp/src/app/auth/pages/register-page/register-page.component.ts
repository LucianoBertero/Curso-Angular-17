import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators.functions';
import * as customValidators from '../../../shared/validators/validators.functions';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      userName: [
        '',
        [Validators.required, this.validatorsService.cantBeStrider],
      ],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required, Validators.min(6)]],
    },
    {
      validators: [
        this.validatorsService.isFieldOneEqualfieldTwo('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailService
  ) {}

  onSave() {
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(field, this.myForm);
  }
}
